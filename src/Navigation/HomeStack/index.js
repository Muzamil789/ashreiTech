import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../../screens/Dashboard';
import ProductPage from '../../screens/ProductPage';
import CourseCategories from '../../screens/CoursesCategories';
import Search from '../../screens/Search';

const HomeStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="ProductPage" component={ProductPage} />
            <Stack.Screen name="CourseCategories" component={CourseCategories} />
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    )
}

export default HomeStack