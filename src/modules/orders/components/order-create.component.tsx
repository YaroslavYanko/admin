import { ManyToManyInput } from '@app/common/components/many-to-many-input/many-to-many-input.componet';
import { useManyToManyInput } from '@app/common/hooks/useManyToManyInput';
import { Order_Status_Enum } from '@app/core/types';
import { useRef } from 'react';


import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput, useDataProvider, useRedirect } from 'react-admin';
import { OrderForm } from './order.types';



export const OrderCreate = () => {
    const { mutateJoinResource, fieldsProps } = useManyToManyInput({
        joinResource: 'orders_products',
        resourceField: 'order_id',
        referenceField: 'products_id'
    })

    const newReferences = useRef<string[]>([])
    const transform = (data: OrderForm) => {
        newReferences.current = data.joined_orders_products
        return data
    }

    const redirect = useRedirect()
    const onSuccess = async (data: Omit<OrderForm, 'joined_orders_products'>) => {
      await  mutateJoinResource({ id: data.id, newReferences: newReferences.current })
      redirect('show', 'orders', data.id)
    }

    return (
        <Create title="Створити нове замовлення" transform={transform} mutationOptions={{ onSuccess }}>
            <SimpleForm>
                <TextInput source="client_adress" fullWidth label="Адреса" />
                <TextInput source="client_name" label="Імя" />
                <TextInput source="client_surname" label="Фамілія" />
                <TextInput source="client_phone" label="Номер телефону" />
                <ReferenceInput reference='order_status' source='status'>
                    <SelectInput optionText="label" label="Статус замовлення" defaultValue={Order_Status_Enum.New} />
                </ReferenceInput>
                <ManyToManyInput
                    label='Товари'
                    reference='goods'
                    source="joined_orders_products"
                    {...fieldsProps}
                />
            </SimpleForm>
        </Create>
    )
}