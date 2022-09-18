import { useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import background from '../../assets/images/stock-1.jpg';
import { Box, Image, Center, Text } from "native-base";
import * as NavigationBar from 'expo-navigation-bar';

export default function WelcomeScreen({ navigation }) {
  
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#63b76d");
  }, []);

  const handleAccept = () => {
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Vacancies' }],
    // });
    navigation.navigate('Vacancies');
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
      <Box
        style={styles.bottomContainer}
      >
        <Center style={{flex: 1}}>
          <Text
            style={styles.title}
          >Estadías</Text>
          <Text
            style={styles.info}
          >Entérate de las ofertas para estadias que suben tus docentes</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonAccept}
            onPress={handleAccept}
          >
            <AntDesign name="doubleright" size={30} color="#6e6e6d" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
          >
            <Text
              style={styles.link}
              >Acceder como docente</Text>
          </TouchableOpacity>
        </Center>
      </Box>
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
  bottomContainer: {
    position: 'absolute',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#63b76d'
  },
  title: {
    fontSize: 55,
    lineHeight: 55,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 60,
    color: '#131416'
  },
  info: {
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
    color: '#fff',
    paddingHorizontal: 40,
    marginTop: 20
  },
  buttonAccept: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 50,
    marginTop: 30,
  },
  link: {
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: '900',
    color: '#fff',
    marginTop: 30,
    color: '#131416',
    borderBottomColor: '#131416',
    borderBottomWidth: 2
  },
});
