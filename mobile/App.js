import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth0Provider } from 'react-native-auth0';

import Home from './screens/Home';
import Main from './components/Main';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Auth0Provider domain={"dev-izyyi8s1l0oh6rko.us.auth0.com"} clientId={"sdPMAbg5sjCWmlk9JEEDxefOgySB9M3O"}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Main' component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </Auth0Provider>
  );
}