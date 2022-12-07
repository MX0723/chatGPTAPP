import Toast from 'react-native-toast-message'

export const showToast = (text:string) => {
  Toast.show({
    type: 'error',
    text1: '出错了',
    text2: text,
  });
}
