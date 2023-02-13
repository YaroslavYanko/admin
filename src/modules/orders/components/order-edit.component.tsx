import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { useProductsOrderInput } from './hooks/use-products-order-input.hook';
import { OrderForm } from './order.types';
import { ProductsOrderInput } from './products-order-input.component';




export const OrderEdit = () => {

    const { mutate } = useProductsOrderInput()


    const transform = async (data: OrderForm) => {

        await mutate({
            id:data.id,
            newReferences:data.joined_orders_products,
        })


        return data
    };






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
                <ReferenceInput reference='payment_types' source='payment_type'>
                    <SelectInput optionText="label" label="Спосіб оплати" />
                </ReferenceInput>
                <ProductsOrderInput />
            </SimpleForm>
        </Edit>
    )
}