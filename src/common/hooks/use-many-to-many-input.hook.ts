import { useDataProvider } from "react-admin";
import { getManyReferenceFilter } from "../components/data/get-many-reference-filter";

interface UseManyToManyInputOption {
  joinResource: string;
  resourceField: string;
  referenceField: string;
}

interface MutateJoinResourceOptions {
  id: string;
  newReferences: string[];
}

export const useManyToManyInput = ({
  joinResource,
  resourceField,
  referenceField,
}: UseManyToManyInputOption) => {
  const dataProvider = useDataProvider();

  const mutateJoinResource = async ({
    id,
    newReferences,
  }: MutateJoinResourceOptions) => {
    const prevReferences = await dataProvider.getManyReference(joinResource, {
      id,
      target: resourceField,
      ...getManyReferenceFilter,
    });

    const addedReferences = newReferences.filter(
      (newReference) =>
        !prevReferences.data?.find((prevRef) => prevRef.id === newReference)
    );

    const removedReferences = prevReferences.data?.filter(
      (prevReferences) => !newReferences.includes(prevReferences.id)
    );

    if (addedReferences.length > 0) {
      await Promise.all(
        addedReferences.map((referenceId) => {
          const newOrdersProductsItem = {
            [resourceField]: id,
            [referenceField]: referenceId,
          };

          return dataProvider.create(joinResource, {
            data: newOrdersProductsItem,
          });
        })
      );
    }

    if (removedReferences.length > 0) {
      const removeIds = removedReferences.map(
        (removedReference) => removedReference.id
      );
      await dataProvider.deleteMany(joinResource, { ids: removeIds });
    }
  };

  const fieldsProps = {
    joinResource,
    resourceField,
    referenceField,
  };

  return { mutateJoinResource, fieldsProps };
};
