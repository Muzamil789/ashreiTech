import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Dashboard from '../../screens/Dashboard';
import MyCourses from '../../screens/MyCourses';
import { tabIcons } from '../../assets';
import { Image, StyleSheet, View } from 'react-native';
import { vh, vw } from '../../assets/theme/dimention';
import { COLORS } from '../../assets/theme/colors';
import AddToCart from '../../screens/AddToCart';
import FontBold from '../../components/Typography/FontBold';
import HomeStack from '../HomeStack';

const TabStack = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarLabelStyle: {
                    fontSize: vw * 3,
                    fontWeight: '700',
                },
                tabBarStyle: {
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0,
                    height: 80,
                },
                tabBarIcon: ({ focused }) => {
                    let icon;

                    if (route.name === 'Dashboard') {
                        icon = focused ? tabIcons.tabHome : tabIcons.tabHome;
                    } if (route.name === 'Courses') {
                        icon = focused ? tabIcons.tabHome : tabIcons.tabCourses;
                    } if (route.name === 'Wishlist') {
                        icon = focused ? tabIcons.tabHome : tabIcons.tabWishlist;
                    } if (route.name === 'Cart') {
                        icon = focused ? tabIcons.tabCart : tabIcons.tabCart;
                    } if (route.name === 'Account') {
                        icon = focused ? tabIcons.tabHome : tabIcons.tabAccount;
                    }

                    return (
                        <View style={{ position: 'relative' }}>
                            <Image
                                source={icon}
                                style={{ width: 24, height: 24, resizeMode: 'contain', }}
                            />
                            {
                                route.name === 'Cart' && (
                                    <View style={styles.cartNumberBox}>
                                        <FontBold name={'15'} style={styles.cartNumber} />
                                    </View>
                                )
                            }
                        </View>
                    );
                },
            })}
        >
            <Tab.Screen name="Dashboard" component={HomeStack} options={{ headerShown: false }} />
            <Tab.Screen name="Courses" component={MyCourses} options={{ headerShown: false }} />
            <Tab.Screen name="Wishlist" component={MyCourses} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={AddToCart} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={MyCourses} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default TabStack


const styles = StyleSheet.create({
    cartNumberBox: {
        position: 'absolute',
        zIndex: 11,
        right: -10,
        top: -7,
        width: vw * 4.5,
        height: vw * 4.5,
        borderWidth: 2,
        borderRadius: 100,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    cartNumber: {
        // color: COLORS.MediumSeaGreen,
        color: COLORS.textColor,
        fontSize: vw * 2.5,
        fontWeight: '700'
    }
})