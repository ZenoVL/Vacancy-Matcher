import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    Create,
    ReferenceField,
    SelectInput, ReferenceInput, FunctionField
} from 'react-admin';

export const PremiseList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="properties.pva_straat" label="Straat" />
            <TextField source="properties.pva_huisnr1" label="Nummer" />
            <TextField source="properties.pva_postcode" label="Postcode" />
            <TextField source="properties.pnd_district" label="District" />
            <ReferenceField source="properties.ownerId" label="Eigenaar" reference="Users">
                <FunctionField render={record => `${record.name}`} />
            </ReferenceField>
            <EditButton label='' />
        </Datagrid>
    </List>
);



export const PremiseEdit = (props) => (
    <Edit {...props} >
        <SimpleForm  >
            <TextInput disabled source="id" />
            <TextInput source="properties.pva_straat" label="Straat" />
            <TextInput source="properties.pva_huisnr1" label="Nummer" />
            <TextInput source="properties.pva_postcode" label="Postcode" />
            <TextInput source="properties.pnd_district" label="District" />
            <ReferenceInput source="properties.ownerId" label="Eigenaar" reference="Users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="properties.state" label="Staat" />
        </SimpleForm>
    </Edit>
);

export const PremiseCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="properties.pva_straat" label="Straat" />
            <TextInput source="properties.pva_huisnr1" label="Nummer" />
            <TextInput source="properties.pva_postcode" label="Postcode" />
            <TextInput source="properties.pnd_district" label="District" />
            <ReferenceInput source="properties.ownerId" label="Eigenaar" reference="Users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="properties.state" label="Staat" />
        </SimpleForm>
    </Create>
);
