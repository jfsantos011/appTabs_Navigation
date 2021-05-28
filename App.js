import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/pages/home';
import About from './src/pages/about';
import Contact from './src/pages/contact';
import Info from './src/pages/info';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  About: {
    name: 'ios-people'
  },
  Contact: {
    name: 'ios-call'
  },
  Info: {
    name: 'ios-information-circle'
  }
}

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({ color, size }) => {
              const { name } = icons[route.name];

              return <Icon name={name} color={color} size={size} />
            }
          })}
          tabBarOptions={{
            style: {
              backgroundColor: '#222831',
            },
            activeTintColor: '#FF0000',
            inactiveTintColor: '#E0FFFF'
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Contact" component={Contact} />
          <Tab.Screen name="Info" component={Info} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}