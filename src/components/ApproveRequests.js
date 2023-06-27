import {
    List,
    Datagrid,
    UrlField,
    DeleteWithConfirmButton, CloneButton, DeleteButton, Button
} from 'react-admin';
import {ApproveButton} from "./ApproveButton";

export const ApprovalRequestList = (props) => (
    <List {...props} perPage={25}>
        <Datagrid>
            <UrlField source="fileUrl" label='Kadastraal uittreksel' target='_blank'/>
            <ApproveButton />
            <DeleteButton label=''/>
        </Datagrid>
    </List>
);