import {GiftedChat} from 'react-native-gifted-chat'
import {getMessagesSnap, getUserSnap, setMessages} from './CommonStore'
import {IMessage} from 'react-native-gifted-chat/lib/Models'
import {replyMessage, sendMessage, sendMessageBody} from './SendMessage'
import {showToast} from './ShowToast'

function parseBOTMessage(response: replyMessage): IMessage {
    return {
        _id: `${Math.floor(Math.random() * 1000)}${Date.now()}`,
        text: response.response,
        createdAt: Date.now(),
        user: {
            _id: 0,
            name: 'ChatGPT',
        },
    }
}

export const sendChatFunc = async (chatMessage: IMessage[]) => {
    setMessages(GiftedChat.append(getMessagesSnap(), chatMessage))
    const userChatMessage = chatMessage[chatMessage.length - 1]

    if (!userChatMessage) {
        return
    }

    const userSendMessage = new sendMessageBody(userChatMessage.text, getUserSnap().name as string)

    try {
        const reply = (await sendMessage(userSendMessage)) as replyMessage
        const messages = GiftedChat.append(getMessagesSnap(), [parseBOTMessage(reply)])
        setMessages(messages)
    } catch (err) {
        showToast(String(err))
    }
}
