
import { useGetSettingsQuery } from '@app/core/types';
import { Edit, Loading, ReferenceInput, SelectInput, SimpleForm } from 'react-admin';
import { SettingEditToolbar } from '../setting-edit-toolbar/setting-edit-toolbar.component';

export const SettingEdit = () => {

 const {data,loading}= useGetSettingsQuery()

 if(!data || loading){
    return <Loading/>
 }
    return (
        <Edit
            mutationMode='pessimistic'
            title="Налаштування"
            id={data.settings[0].id}
            resource="settings"
        >
            <SimpleForm toolbar={<SettingEditToolbar />}>
                <ReferenceInput source="masks_category" reference="categories" >
                    <SelectInput optionText="title" label="Категорія масок" fullWidth />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    )
}

