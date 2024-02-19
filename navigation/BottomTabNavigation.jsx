import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Rules from '../screens/Rules';
import HowToUse from '../screens/HowToUse';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();


const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} 
        options={{
            tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#04213b' : '#848484', fontSize: 14 }}>
                    Profile
                </Text>
            ),
            tabBarIcon: ({ focused }) => (
            <Ionicons name="person" size={22} color='#04213b' style={{ color: focused ?  '#04213b' : '#848484'}}/>
            ),
            headerShown: false
        }}/>
      <Tab.Screen name="Rules" component={Rules} 
        options={{
            tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#04213b' : '#848484', fontSize: 14 }}>
                    Company rules
                </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Ionicons name="ios-book" size={22} color='#04213b' style={{ color: focused ?  '#04213b' : '#848484'}}/>
            ),
            title: 'Company rules',
            headerShown: false
        }} />
      <Tab.Screen name="HowToUse" component={HowToUse} 
        options={{
            tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? '#04213b' : '#848484', fontSize: 14 }}>
                    How to use
                </Text>
            ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="ios-help-circle-outline" size={22} style={{ color: focused ?  '#04213b' : '#848484'}}/>
          ),
          headerShown: false
        }} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation