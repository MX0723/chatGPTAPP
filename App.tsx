import React from 'react'
import {LoginScreen} from './src/Screens/LoginScreen'
import {ChatScreen} from './src/Screens/ChatScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import {RootStackParamList} from './src/Utils/RootStackParamListType'
import Toast from 'react-native-toast-message'

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
            </Stack.Navigator>
            <Toast />
        </NavigationContainer>
    )
}

export default App
