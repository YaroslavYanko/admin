import { Orders } from '@app/core/types';
import { Datagrid, List, TextField, ChipField, ReferenceField, ReferenceInput, SelectInput, FunctionField, DateField } from 'react-admin';


const filters = [
    <ReferenceInput source='status' reference='order_status' label="Статус замовлення" >
        <SelectInput optionText='label' label="Статус" />
    </ReferenceInput>
]

export const OrderList = () => (
    <List exporter={false} filters={filters} sort={{field:'created_at',order:'DESC'}}>
        <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField source="client_adress" label="Адреса" />
            <TextField source="client_surname" label="Фамілія" />
            <TextField source="client_name" label="Імя" />
            <TextField source="client_phone" label="Телефон" />
            <ReferenceField reference='order_status' source='status' label="Статус замовлення" link={false}>
                <ChipField source="label" />
            </ReferenceField>

            <FunctionField
                source='sum'
                label="Загальна вартість"
                render={(record: Orders) => `${record.sum} грн`} />
            <DateField source="created_at" label="Створено" showTime options={{timezone:'Europe/Kiev'}}/>
        </Datagrid>
    </List>
);