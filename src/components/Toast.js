import { default as ToastContainer, BaseToast } from 'react-native-toast-message';
import { StyleSheet } from 'react-native';

const toastTextStyle = StyleSheet.create({
  text1Style: {
    fontSize: 20,
  },
  text2Style: {
    fontSize: 17,
    color: '#5B5B5B',
    fontWeight: '500'
  },
});

const toastConfig = {
  info: (props) => (
    <BaseToast
      {...props}
      {...toastTextStyle}
      style={{ borderLeftColor: '#9C9C9C' }}
    />
  ),
  success: (props) => (
    <BaseToast
      {...props}
      {...toastTextStyle}
      style={{ borderLeftColor: '#16BF2B' }}
    />
  ),
  error: (props) => (
    <BaseToast
      {...props}
      {...toastTextStyle}
      style={{ borderLeftColor: '#EC0909' }}
    />
  ),
};

export default Toast = () => <ToastContainer config={toastConfig}/>;