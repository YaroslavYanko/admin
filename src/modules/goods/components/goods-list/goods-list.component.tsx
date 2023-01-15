import { config } from '@app/core/config';
import { Goods } from '@app/core/types';
import { Datagrid, EditButton, FunctionField, List, ReferenceField, ReferenceInput, SelectInput, TextField, TextInput } from 'react-admin';
import { GoodsListExpand } from '../goods-list-expand/menu-list-expand.component';

const filters = [
    <TextInput source='shortName' label="Пошук по назві" />,
    <ReferenceInput source='category_id' reference='categories' label="Пошук по категорії" >
        <SelectInput optionText='title' label="Категорія"/>
    </ReferenceInput>
]

export const GoodList = () => (
    <List filters={filters} exporter={false}>
        <Datagrid
            expand={GoodsListExpand}
            rowClick="expand"
            bulkActionButtons={false}
            isRowExpandable={(row: Goods) => row.category_id !== config.masksCategoryId}
        >
            <TextField source="shortName" label="Назва" />
            <ReferenceField source='category_id' reference='categories' link={false} label="Категорія">
                <TextField source='title' />
            </ReferenceField>
            <FunctionField source='price' label="Ціна" render={(record: Goods) => `${record.price} грн`} />
            <EditButton />
        </Datagrid>
    </List>
);