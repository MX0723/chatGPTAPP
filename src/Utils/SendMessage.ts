export class sendMessageBody {
    message: string
    user: string
    constructor(message: string, user: string) {
        this.message = message
        this.user = user
    }
}

export type replyMessage={
    response:string
}

export function sendMessage(body: sendMessageBody) {
    return new Promise((resolve, reject) => {
        // 请将url换成你自己的api地址
        fetch('http://192.168.1.4:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then(response => {
                if (response.ok) {
                    const res:Promise<replyMessage> = response.json()
                    resolve(res)
                } else {
                    return reject(response.status)
                }
            })
            .catch(error => reject(error))
    })
}
