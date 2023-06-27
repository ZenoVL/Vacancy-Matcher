import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    BooleanField,
    BooleanInput, SingleFieldList, ChipField, ReferenceManyField, NullableBooleanInput, Pagination
} from 'react-admin';


export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label='Naam' />
            <TextField source="email" label='Email' />
            <TextField source="phoneNumber" label='Telefoonnr' />
            <BooleanField source="isOwner" label='Eigenaar?' />
            <BooleanField source="isAnonymous" label='Annoniem?' />
            <ReferenceManyField reference="Premises" target="properties/ownerId" label="Panden" sortable={false}>
                <SingleFieldList>
                    <ChipField source="address" />
                </SingleFieldList>
            </ReferenceManyField>
            <BooleanField source="isAdmin" label="Admin?" defaultValue={'false'} defaultChecked={false}/>
            <EditButton label=''/>
        </Datagrid>
    </List>
);

export const UserEdit = (props) => (
    <Edit {...props}  >
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" label='Naam' />
            <TextInput source="phoneNumber" label='Telefoonnr' />
            <NullableBooleanInput source="isOwner"  label='Eigenaar?' />
            <NullableBooleanInput source="isAnonymous" label='Annoniem?' />
            <NullableBooleanInput source="isAdmin" label='Admin?' />
        </SimpleForm>
    </Edit>
);