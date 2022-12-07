import React from 'react'
import {SafeAreaView} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../Utils/RootStackParamListType'
import {useMessages, useUser} from '../Utils/CommonStore'
import { Bubble, GiftedChat, IMessage } from "react-native-gifted-chat";
import {sendChatFunc} from '../Utils/ChatGPTFunc'
import { showToast } from "../Utils/ShowToast";

type ChatScreenPropsType = NativeStackScreenProps<RootStackParamList, 'Chat'>

export const ChatScreen: React.FC<ChatScreenPropsType> = () => {
    const user = useUser()
    const messages = useMessages()

    return (
        <SafeAreaView style={{flex: 1}}>
            <GiftedChat
                messages={messages}
                user={user}
                onSend={(message: IMessage[]) => {
                    sendChatFunc(message).catch(err => showToast(err))
                }}
                renderAvatar={() => null}
                renderBubble={props => {
                  return (
                    <Bubble
                      {...props}
                      wrapperStyle={{
                        left: {
                          backgroundColor: '#D8E2DC',
                        },
                      }}
                    />
                  );}}
            />
        </SafeAreaView>
    )
}
