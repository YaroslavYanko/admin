import { getManyReferenceFilter } from "@app/common/components/data/get-many-reference-filter"
import { FC, useEffect, useState } from "react"
import { ArrayInput, AutocompleteInput, EditButton, NumberInput, SimpleForm, SimpleFormIterator, TextInput, useDataProvider, useGetList, useRecordContext } from "react-admin"
import { useFormContext } from "react-hook-form"

interface ProductsOrderInputProps { }

export const ProductsOrderInput: FC<ProductsOrderInputProps> = () => {
    const record = useRecordContext();
    const dataProvider = useDataProvider();
    const { setValue } = useFormContext();

    const productsItems = useGetList('goods');

    const [joinedEntities, setJoinedEntities] = useState<any[]>([]);

    useEffect(() => {
        if (!record) return;

        const fetchJoinReferences = async () => {
            const entities = await dataProvider.getManyReference('orders_products', {
                id: record.id,
                target: 'order_id',
                ...getManyReferenceFilter,
            });

            setJoinedEntities(entities.data);
        };

        fetchJoinReferences();
    }, []);

    useEffect(() => {
        setValue('joined_orders_products', joinedEntities);
    }, [joinedEntities]);

    return (
        <ArrayInput source="joined_orders_products" label="Замовлення">
            <SimpleFormIterator inline disableClear>
                <AutocompleteInput
                    choices={productsItems.data}
                    translateChoice={false}
                    optionText="title"
                    source="products_id"
                    label="Позиція продукту"
                    sx={{ width: 600 }}
  
                />
               
                <NumberInput source="amount" label="Кількість" />
              
            </SimpleFormIterator>
       
        </ArrayInput>
    );
};