import { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import background from '../../assets/images/stock-2.jpg';
import { Box, Image, VStack, Heading } from 'native-base';
import axios from 'axios';
import * as NavigationBar from 'expo-navigation-bar';
import Toast from 'react-native-toast-message';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { setData } from '../../features/user/userSlice.js'

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('#63b76d');
  }, []);

  const handleLogin = () => {
    if (user.trim() == '')
      return Toast.show({ type: 'error', text1: 'ERROR', text2: 'Ingresa tu nombre de usuario' });
    if (password.trim() == '')
      return Toast.show({ type: 'error', text1: 'ERROR', text2: 'Ingresa tu contraseña' });
      axios({
        method: 'post',
        url: 'http://192.168.0.17:891/api/acceder',
        timeout: 5000,
        data: { user, password },
      })
      .then(function (response) {
        const { data } = response;
        if (data.result) {
          dispatch( setData(data.result) );
          navigation.reset({
            index: 0,
            routes: [{ name: 'Vacancies' }],
          });
          Toast.show({ type: 'success', text1: 'ÉXITO', text2: 'Credenciales correctas' });
        }
        else
          Toast.show({ type: 'error', text1: 'ERROR', text2: 'Credenciales incorrectas' });
      })
      .catch(err => {
        console.log(err);
        Toast.show({ type: 'error', text1: 'ERROR', text2: 'Hay problemas en la red' });
      });
  }

  return (
    <Box
      style={styles.container}
    >
      <Image
        alt="Imagen de escritorio en una reunion"
        source={background}
        style={styles.background}
      />
      <VStack justifyContent="center" flexGrow={1} marginX={5} space={3}>
        <Heading color="#2b2b2b">Acceder</Heading>
        <VStack backgroundColor="rgba(255,255,255,0.3)" space={3} padding={5} borderRadius={20}>
          <TextInput
            placeholder="Usuario..."
            style={styles.input}
            value={user}
            onChangeText={text => setUser(text)}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Contraseña..."
            style={styles.input}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button
            label="Acceder"
            onPress={handleLogin}
          />
        </VStack>
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  background: {
    width: undefined,
    height: '100%',
    aspectRatio: 1,
    position: 'absolute'
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    fontWeight: '500',
  }
});
