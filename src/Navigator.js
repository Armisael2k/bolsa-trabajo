import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import VacanciesScreen from './screens/VacanciesScreen';
import NewVacancieScreen from './screens/NewVacancieScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}/>
      <Stack.Screen
        name="Vacancies"
        component={VacanciesScreen}/>
      <Stack.Screen
        name="Login"
        component={LoginScreen}/>
      <Stack.Screen
        name="NewVacancie"
        component={NewVacancieScreen}/>
    </Stack.Navigator>
  );
}