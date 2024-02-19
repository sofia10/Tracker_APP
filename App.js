import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import PermissionExplanationScreen from './screens/PermissionExplanationScreen';
import BotInfo from './screens/BotInfo';
import WorkingStatus from './screens/WorkingStatus';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BotInfo"
          component={BotInfo}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="PermissionExplanationScreen"
          component={PermissionExplanationScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="WorkingStatus"
          component={WorkingStatus}
          options={{
            title: '',
            headerShown: true
          }}
        />
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
