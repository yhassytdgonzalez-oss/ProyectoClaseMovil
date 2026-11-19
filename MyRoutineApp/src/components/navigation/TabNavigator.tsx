import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Settings from '../../screens/Settings';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2196F3', // Color azul para el activo
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />
      <Tab.Screen name="Settings" component={Settings} options={{ title: 'Ajustes' }} />
    </Tab.Navigator>
  );
}