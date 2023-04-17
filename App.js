import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Singup from './src/screens/Singup';
import Basepage from './src/screens/Basepage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer styles={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={Welcome}
          options={
            {
              headerShown: false
            }
          } />
        <Stack.Screen name="login" component={Login}
          options={
            {
              headerShown: false
            }
          } />
        <Stack.Screen name="signup" component={Singup}
          options={
            {
              headerShown: false
            }
          } />
          <Stack.Screen name="basepage" component={Basepage}
          options={
            {
              headerShown: false
            }
          } />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
