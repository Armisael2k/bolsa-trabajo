import { Text } from "native-base";
import { useSelector } from "react-redux";
import { StatusBar } from 'react-native';

export default function User(){
  const user = useSelector(state => state?.user?.data);

  return (
    user ?
      <Text position="absolute" marginLeft={5} color="#2b2b2b" fontWeight="700" top={StatusBar.currentHeight}>Logeado como {user.nombre}</Text>
    : null
  );
}