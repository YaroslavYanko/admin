import { Goods } from '@app/core/types';
import { Datagrid, EditButton, FunctionField, List, TextField, TextInput } from 'react-admin';
import { GoodsListExpand } from '../goods-list-expand/menu-list-expand.component';

const filters = [
    <TextInput source='shortName' label="Пошук по назві"/>
]

export const GoodList = () => (
    <List filters={filters} exporter={false}>
        <Datagrid expand={GoodsListExpand} rowClick="expand" bulkActionButtons={false}>
            <TextField source="shortName" label="Назва" />
            <FunctionField label="Ціна" render={(record: Goods)=>`${record.price} грн` }/>
             <EditButton/>
        </Datagrid>
    </List>
);