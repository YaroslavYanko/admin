import { Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { CloudinaryInput } from '@app/common/components/cloudinary-input/cloudinary-input.components';

export const GoodsCreate = () => (
    <Create title="Додати товар">
        <SimpleForm>
            <TextInput source="shortName" label="Коротка назва" />
            <ReferenceInput source="category_id" reference="categories" >
                <SelectInput optionText="title" label="Категорія" fullWidth />
            </ReferenceInput>
        
                <CloudinaryInput source='image' label="Фото для списку товарів" />
        

            <TextInput source="title" fullWidth label="Назва" />
            <TextInput source="characteristics" multiline fullWidth label="Характеристики" />
            <TextInput source="description" multiline fullWidth label="Опис" />
            <TextInput source="ingredients" multiline fullWidth label="Інгрідієнти" />
            <NumberInput source="price" label="Ціна в грн" />
        </SimpleForm>
    </Create>
);
