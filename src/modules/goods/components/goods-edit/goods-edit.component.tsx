
import { CloudinaryInput } from '@app/common/components/cloudinary-input/cloudinary-input.components';
import { Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { GoodsEditTitle } from '../goods-edit-title/goods-edit-title.component';


export const GoodEdit = () => {
    return (
        <Edit title={<GoodsEditTitle />} mutationMode="pessimistic" >
            <SimpleForm>
                <TextInput source="shortName" label="Коротка назва" />
                <ReferenceInput source="category_id" reference="categories" >
                    <SelectInput optionText="title" label="Категорія" fullWidth />
                </ReferenceInput>
                <CloudinaryInput source='image' label="Фото" />
                <TextInput source="id" disabled />
                <TextInput source="title" fullWidth label="Назва" />
                <TextInput source="description" multiline fullWidth label="Опис" />
                <NumberInput source="price" label="Ціна в грн" />
            </SimpleForm>
        </Edit>
    )

}

