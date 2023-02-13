import { Orders, Order_Status_Enum } from "@app/core/types"
import { ChipField, Datagrid, DateField, EditButton, FunctionField, List, ReferenceField, ReferenceInput } from "react-admin"
import { InlineStatusEdit } from "../inline-status-edit/inline-status-edit.component"


export const NewOrders = () => {


    return (
        <List resource="orders" exporter={false} hasCreate={false} filter={{
            'status@_in': [
                Order_Status_Enum.New, Order_Status_Enum.InProgress, Order_Status_Enum.Done
            ]
        }}>
            <Datagrid bulkActionButtons={false} rowClick='show'>
                  
                {/* Для зміни статусу */}
                {/* <InlineStatusEdit label="Статус замовлення" /> */}

                <ReferenceField reference='order_status' source='status' label="Статус замовлення" link={false}>
                    <ChipField source="label" />
                </ReferenceField>


                <DateField source="created_at" label="Створено" showTime options={{ timezone: 'Europe/Kiev' }} />

                <FunctionField
                    source='sum'
                    label="Загальна вартість"
                    render={(record: Orders) => `${record.sum} грн`} />
                <EditButton />
            </Datagrid>
        </List>
    )
}