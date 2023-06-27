import * as React from 'react';
import {useUpdate, useNotify, useRecordContext, Button, useDelete, useRedirect} from 'react-admin';
import { ref, deleteObject } from "firebase/storage";
import {storage} from "../App";
import {useSendNotification} from "../hooks/useNotifications";
import {getUserData} from "../services/UserServices";

export const ApproveButton = () => {
    const record = useRecordContext();
    const notify = useNotify();
    const redirect = useRedirect();
    const {mutate:sendNotification} = useSendNotification()

    const [approve, { isLoading }] = useUpdate(
        'Premises',
        { id: record.premiseId, data: { properties : { 'ownerId': record.userId} } },
        {
            onSuccess: (data) => {
                notify('Aanvraag goedgekeurd.');
                getUserData(record.userId)
                    .then(u=>{
                        sendNotification({to:u.notificationTokens, title: 'Aanvraag goedgekeurd', body: 'Uw aanvraag werd goedgekeurd'})
                    })
                redirect('/ApproveRequests');
            },
            onError: (error) => {
                notify(`Error met goedkeuren: ${error.message}`, { type: 'error' });
            },
        }
    );
    const [deleteApprove, { isLoading2 }] = useDelete('ApproveRequests', { id: record.id });

    return <Button onClick={() => approve() && deleteApprove() &&
        deleteObject(ref(storage, `approveOwner/${record.userId}/${record.premiseId}`))} disabled={isLoading && isLoading2} label='Goedgekeurd' />;
};