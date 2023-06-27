import {useMutation, useQuery} from "react-query";

interface SendPushNotificationProps{
    to: Array<string>
    title: string
    body: string
}

async function sendPushNotificationHandler({to, title, body}:SendPushNotificationProps){
    console.log(to)

    fetch("https://exp.host/--/api/v2/push/send",{
        method: "post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            to:to,
            title: title,
            body: body
        })
    })
}

export function useSendNotification(){
    const {
        isLoading,
        isError,
        isSuccess,
        mutate
    } = useMutation(["sendNotification"],(props:SendPushNotificationProps)=>sendPushNotificationHandler(props))

    return{
        isLoading,
        isError,
        isSuccess,
        mutate
    }
}