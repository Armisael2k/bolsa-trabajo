import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/Navigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <NativeBaseProvider>
        <Navigator/>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}