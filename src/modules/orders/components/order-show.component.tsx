import { Goods, Orders } from "@app/core/types";
import { Datagrid, FunctionField, ReferenceField, ReferenceManyField, Show, SimpleShowLayout, TextField } from "react-admin";

export const OrderShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="client_adress" label='Адреса' />
            <TextField source="client_name" label='Імя' />
            <TextField source="client_surname" label='Фамілія' />
            <TextField source="client_phone" label='Номер телефону' />
            <ReferenceField reference='order_status' source='status' label="Статус замовлення" link={false}>
                <TextField source="label" />
            </ReferenceField>
            <ReferenceManyField reference="orders_products" target="order_id" label="Замовлення">
                <Datagrid bulkActionButtons={false}>
                    <ReferenceField reference="goods" source="products_id" link={false} label="Назва">
                        <TextField source="title" />
                    </ReferenceField>
                    <ReferenceField reference="goods" source="products_id" link={false} label="Ціна">
                        <FunctionField source='price' label="Ціна" render={(record: Goods) => `${record.price} грн`} />
                    </ReferenceField>
                </Datagrid>
            </ReferenceManyField >
            <FunctionField source='sum' label="Загальна вартість" render={(record: Orders) => `${record.sum} грн`} />
        </SimpleShowLayout>
    </Show>
);