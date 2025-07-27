import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

import { HomeScreen } from '@features/home/HomeScreen';
import { SettingsScreen } from '@features/settings/SettingsScreen';
import { navigationTheme } from '@theme/theme';

import type { RootTabParamList, RootStackParamList } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#10B981', // Generic green color
        tabBarInactiveTintColor: '#718096',
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E2E8F0',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="settings" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
