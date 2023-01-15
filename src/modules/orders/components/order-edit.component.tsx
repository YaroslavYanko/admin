import { ManyToManyInput } from '@app/common/components/many-to-many-input/many-to-many-input.componet';
import { useManyToManyInput } from '@app/common/hooks/useManyToManyInput';

import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput, useDataProvider } from 'react-admin';
import { OrderForm } from './order.types';




export const OrderEdit = () => {
    const { mutateJoinResource,fieldsProps } = useManyToManyInput({ 
        joinResource: 'orders_products', 
        resourceField: 'order_id', 
        referenceField: 'products_id' 
    })




    const transform = async (data: OrderForm) => {
        await mutateJoinResource({ 
            id: data.id, 
            newReferences: data.joined_orders_products
        })
        return data
    }



    return (
        <Edit mutationMode='pessimistic' transform={transform}>
            <SimpleForm>
                <TextInput source="client_adress" fullWidth label="Адреса" />
                <TextInput source="client_name" label="Імя" />
                <TextInput source="client_surname" label="Фамілія" />
                <TextInput source="client_phone" label="Номер телефону" />
                <ReferenceInput reference='order_status' source='status'>
                    <SelectInput optionText="label" label="Статус замовлення" />
                </ReferenceInput>
                <ManyToManyInput
                    label='Товари'
                    reference='goods'
                    source="joined_orders_products"
                    {...fieldsProps}
                />
            </SimpleForm>
        </Edit>
    )
}