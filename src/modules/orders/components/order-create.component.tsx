import { Order_Status_Enum } from '@app/core/types';
import { useRef } from 'react';

import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput, useDataProvider, useRedirect } from 'react-admin';
import { useProductsOrderInput } from './hooks/use-products-order-input.hook';
import { JoinedOrderProductsItem, OrderForm } from './order.types';
import { ProductsOrderInput } from './products-order-input.component';



export const OrderCreate = () => {
   const {mutate} = useProductsOrderInput()

    const newReferences = useRef<JoinedOrderProductsItem[]>([])
    const transform = (data: OrderForm) => {

        newReferences.current = data.joined_orders_products
        return data
    }

    const redirect = useRedirect()
    const onSuccess = async (data: Omit<OrderForm, 'joined_orders_products'>) => {
      await  mutate({
        id:data.id,
        newReferences:newReferences.current
      })
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
                <ProductsOrderInput/>
            </SimpleForm>
        </Create>
    )
}