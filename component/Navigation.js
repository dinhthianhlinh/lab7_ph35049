import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Lab7_PH36088 from '../screens/Lab7_PH36088';
import HomeGG from '../screens/HomeGG';
import LoginWithGG from '../screens/LoginWithGG';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Lab7_PH36088">
        <Stack.Screen name="Lab7_PH36088" component={Lab7_PH36088} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeGG" component={HomeGG} />
        <Stack.Screen name="LoginWithGG" component={LoginWithGG} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
