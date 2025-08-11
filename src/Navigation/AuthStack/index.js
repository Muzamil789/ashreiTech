import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/LoginPages/Login';
import ForgotPassword from '../../screens/ForgotPassword';
import SignupAs from '../../screens/LoginPages/SignupAs';
import Signup from '../../screens/LoginPages/Signup';

const AuthStack = () => {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName={'Login'}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name='ForgorPassword' component={ForgotPassword} />
            <Stack.Screen name='SignupAs' component={SignupAs} />
            <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
    )
}

export default AuthStack