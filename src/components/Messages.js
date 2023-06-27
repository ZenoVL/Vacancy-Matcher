import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    BooleanField,
    BooleanInput,
    SingleFieldList,
    ChipField,
    ReferenceManyField,
    NullableBooleanInput,
    Pagination,
    DeleteButton,
    ReferenceField, FunctionField, RichTextField
} from 'react-admin';


export const MessageList = (props) => (
    <List {...props}>
        <Datagrid>
            <RichTextField source="content" label='Bericht' />
            <ReferenceField source="senderId" label="Zender" reference="Users">
                <FunctionField render={record => `${record.name} (${record['isOwner'] ? 'Eigenaar' : 'Zoeker'})`} />
            </ReferenceField>
            <DeleteButton/>
        </Datagrid>
    </List>
);