import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/Navigator';
import Toast from './src/components/Toast';
import { store } from './store';
import { Provider } from 'react-redux';
import User from './features/user/User';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar/>
      <NavigationContainer>
        <NativeBaseProvider>
          <Navigator/>
          <Toast/>
          <User/>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}