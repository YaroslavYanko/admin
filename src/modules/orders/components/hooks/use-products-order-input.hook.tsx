import { JoinedOrderProductsItem } from '../order.types';
import { getManyReferenceFilter } from '@app/common/components/data/get-many-reference-filter';
import { useDataProvider } from 'react-admin';

interface MutateOptions {
  id: string;
  newReferences: JoinedOrderProductsItem[];
}


export const useProductsOrderInput = () => {
  const dataProvider = useDataProvider()

  const joinResource = 'orders_products';
  const resourceField = 'order_id'
  const referenceField = 'products_id'

  const mutate = async ({ id, newReferences }: MutateOptions) => {

    const prevReferences = await dataProvider.getManyReference(joinResource, {
      id,
      target: resourceField,
      ...getManyReferenceFilter,
    });
    // return {}
    const addedReferences = newReferences.filter((newReferences) => {
      return !newReferences.id;
    });
    const removeReferences = prevReferences.data?.filter(
      (prevReference) =>
        !newReferences.some((ref) => ref.id === prevReference.id)
    );

    const editedReferences = newReferences.filter((newRef) => {
      const prevRef = prevReferences.data?.find((ref) => ref.id === newRef.id);

      if (!prevRef) {
        return false;
      }

      return (
        newRef.products_id !== prevRef.products_id || newRef.amount !== prevRef.amount
      );
    });

    if (addedReferences.length > 0) {
      await Promise.all(
        addedReferences.map((reference) => {
          const newOrdersProductsItem = {
            [resourceField]: id,
            [referenceField]: reference.products_id,
            amount: reference.amount,
          };

          return dataProvider.create(joinResource, {
            data: newOrdersProductsItem,
          });
        })
      );
    }

    if (removeReferences.length > 0) {
      const removeIds = removeReferences.map(
        (removeReferences) => removeReferences.id
      );
      await dataProvider.deleteMany(joinResource, { ids: removeIds });
    }

    if (editedReferences.length > 0) {
      await Promise.all(
        editedReferences.map((reference) => {
          const data = {
            id: reference.id,
            [referenceField]: reference.products_id,
            amount: reference.amount,
          }; 

          const previousData = prevReferences.data.find(
            (prefRef) => prefRef.id === reference.id
          );

          return dataProvider.update(joinResource, {
            id: reference.id!,
            data,
            previousData,
          });
        })
      );
    }
  };


  return { mutate }
};
