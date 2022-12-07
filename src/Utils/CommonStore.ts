import create from 'zustand'
import {IMessage, User} from 'react-native-gifted-chat'

const commonStore = create(() => ({
    user: {_id: 0, name: 'defaultUser'} as User,
    messages: [] as IMessage[],
}))

export const useUser = () => commonStore(s => s.user);

export const setUser = (payload: User) => commonStore.setState({ user: payload });

export const getUserSnap = () => commonStore.getState().user;

export const useMessages = () => commonStore(s => s.messages)

export const setMessages = (payload: IMessage[]) => commonStore.setState({messages: payload})

export const getMessagesSnap = () => commonStore.getState().messages
