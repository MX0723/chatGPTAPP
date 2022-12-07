import React, {useState} from 'react'
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../Utils/RootStackParamListType'
import { setMessages, setUser } from "../Utils/CommonStore";

type LoginScreenPropsType = NativeStackScreenProps<RootStackParamList, 'Login'>

export const LoginScreen: React.FC<LoginScreenPropsType> = ({navigation}) => {
    const [userInput, setUserInput] = useState<string>('')

    const continues = () => {
        if (userInput.length > 0) {
            navigation.navigate('Chat')
            setUser({_id: `00${Date.now()}`, name: userInput})
            setMessages([])
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.circle} />
            <View style={{marginHorizontal: 32, marginTop: 160}}>
                <Text style={styles.title}>请输入用户名</Text>
                <Text style={styles.subTitle}>UserName</Text>
                <TextInput
                    style={styles.input}
                    value={userInput}
                    onChangeText={userName => {
                        setUserInput(userName)
                    }}
                />
            </View>
            <View style={{alignItems: 'flex-end', marginTop: 100, marginRight: 32}}>
                <TouchableOpacity style={styles.continue} onPress={() => continues()}>
                    <Image style={{height: 30, width: 30}} source={require('../Images/arrowRight.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F5F7',
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: 1,
        borderColor: '#22223B',
        borderRadius: 30,
        paddingHorizontal: 16,
        color: '#22223B',
        fontWeight: '600',
    },
    circle: {
        width: 510,
        height: 510,
        borderRadius: 255,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        left: -120,
        top: -60,
    },
    title: {
        marginTop: 32,
        fontSize: 30,
        fontWeight: '800',
        color: '#4A4E69',
    },
    subTitle: {
        fontSize: 15,
        fontWeight: '400',
        color: '#4A4E69',
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#8D99AE',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
