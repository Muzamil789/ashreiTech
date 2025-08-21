import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../../screens/Dashboard';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { drawerIcons, images } from '../../assets';
import { vh, vw } from '../../assets/theme/dimention';
import { COLORS } from '../../assets/theme/colors';
import FontBold from '../../components/Typography/FontBold';
import Profile from '../../screens/Profile';
import MyCourses from '../../screens/MyCourses';
import Notification from '../../screens/Notification';
import FAQS from '../../screens/FAQS';
import Contact from '../../screens/Contact';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import TabStack from '../TabStack';
import TrainingRoom from '../../screens/TrainingRoom';
import Scholarship from '../../screens/Scholarship';
import Checkout from '../../screens/Checkout';
import Invite from '../../screens/Invite';
import ProductPage from '../../screens/ProductPage';
import CourseCategories from '../../screens/CoursesCategories';



const Drawer = createDrawerNavigator();


const routes = [
    {
        id: 1,
        name: 'Home',
        icon: drawerIcons.drawerHome,
        to: 'Dashboard',
    },

    {
        id: 2,
        name: 'Profile',
        icon: drawerIcons.drawerProfile,
        to: 'Profile',
    },

    {
        id: 3,
        name: 'My Courses',
        icon: drawerIcons.drawerMyCourses,
        to: 'MyCourses',
    },

    {
        id: 4,
        name: 'Notification',
        icon: drawerIcons.drawerNotification,
        to: 'Notification',
    },

    {
        id: 5,
        name: 'Financial Assistance',
        icon: drawerIcons.drawerFinancial,
        to: 'FAQS',
    },

    {
        id: 6,
        name: 'Book A Space',
        icon: drawerIcons.drawerBookSpace,
        to: 'TrainingRoom',
    },

    {
        id: 7,
        name: 'Invite',
        icon: drawerIcons.drawerInvite,
        to: 'Invite',
    },

    {
        id: 8,
        name: 'Help Center',
        icon: drawerIcons.drawerHelpCenter,
        to: 'Contact',
    },
    {
        id: 9,
        name: 'Product Page',
        icon: drawerIcons.drawerHelpCenter,
        to: 'ProductPage',
    },
    {
        id: 9,
        name: 'Courses Categories',
        icon: drawerIcons.drawerHelpCenter,
        to: 'CourseCategories',
    },
]




const DrawerContent = (props) => {
    const dispatch = useDispatch()

    const handleCloseDrawer = () => {
        props.navigation.closeDrawer();
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <View>
            <View style={styles.drawerHeaderContainer}>
                <View>
                    <Image source={drawerIcons.drawerHeaderLogo} style={styles.drawerHeaderLogo} />
                </View>
                <TouchableOpacity
                    onPress={handleCloseDrawer}
                >
                    <Image source={drawerIcons.drawerCloseIcon} style={styles.CloseIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.drawerContentContainer}>
                {routes?.map((route, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.drawerInnerContainer}
                        onPress={
                            () => props.navigation.navigate(route.to)
                        }
                    >
                        <View>
                            <Image source={route.icon} style={styles.navigationIcon} />
                        </View>

                        <View style={styles.navigationRow}>
                            <FontBold name={route.name} style={styles.navigationName} />
                            {route.name === 'Notification' && (
                                <View style={styles.notificationContainer}>
                                    <FontBold name={'10'} style={styles.notification} />
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.userRow}>
                <View style={styles.userImageBox}>
                    <Image source={images.signupAs} style={styles.userImage} />
                </View>
                <View style={styles.userInfocontainer}>
                    <FontBold name={'Raheem Iqbal'} style={styles.userName} />
                    <FontBold name={'raheemiqbal@tech.com'} style={styles.userName} numberOfLines={1} />
                </View>
            </View>

            <View style={styles.logoutContainer}>
                <TouchableOpacity
                    style={styles.drawerInnerContainer}
                >
                    <View>
                        <Image source={drawerIcons.drawerLogout} style={styles.navigationIcon} />
                    </View>

                    <TouchableOpacity style={styles.navigationRow} onPress={handleLogout}>
                        <FontBold name={'Logout'} style={styles.navigationName} />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const DrawerStack = () => {
    return (
        <Drawer.Navigator
            initialRouteName='Tabs'
            drawerContent={DrawerContent}
            screenOptions={{
                drawerPosition: 'left',
                drawerStyle: styles.drawerContainer,
                headerShown: false,
            }}
        >
            <Drawer.Screen name="Dashboard" component={TabStack} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="MyCourses" component={MyCourses} />
            <Drawer.Screen name="Notification" component={Notification} />
            <Drawer.Screen name="FAQS" component={FAQS} />
            <Drawer.Screen name="Contact" component={Contact} />
            <Drawer.Screen
                name="Tabs"
                component={TabStack}
                options={{ headerShown: false }}
            />
            <Drawer.Screen name='TrainingRoom' component={TrainingRoom} />
            <Drawer.Screen name='Scholarship' component={Scholarship} />
            <Drawer.Screen name='Checkout' component={Checkout} />
            <Drawer.Screen name='Invite' component={Invite} />
            <Drawer.Screen name='ProductPage' component={ProductPage} />
            <Drawer.Screen name='CourseCategories' component={CourseCategories} />
        </Drawer.Navigator>

    )
}

export default DrawerStack


const styles = StyleSheet.create({
    drawerContainer: {
        backgroundColor: COLORS.white,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        width: vw * 75,
        paddingHorizontal: vw * 6,
        paddingVertical: vh * 4,
    },
    drawerHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    drawerHeaderLogo: {
        width: vw * 30,
        height: vh * 4,
        resizeMode: 'contain',
    },
    CloseIcon: {
        width: vw * 7,
        height: vh * 4,
        resizeMode: 'contain'
    },
    drawerContentContainer: {
        marginVertical: vh * 4,
        gap: vh * 1.5
    },
    drawerInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw * 3,
        padding: vw * 3,
    },
    navigationIcon: {
        width: vw * 6,
        height: vw * 6,
        resizeMode: 'contain'
    },
    navigationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: vw * 50,
    },
    notificationContainer: {
        backgroundColor: COLORS.textColor,
        borderRadius: 50,
        width: vw * 6,
        height: vw * 6,
    },
    notification: {
        color: COLORS.white,
    },
    navigationName: {
        color: COLORS.textColor,
        fontSize: vw * 4.5,
        fontWeight: '700'
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: vw * 3,
    },
    userImageBox: {
        marginLeft: vw * 4,
        borderWidth: vw * .5,
        borderColor: COLORS.profileBorder,
        width: vw * 12,
        height: vw * 12,
        borderRadius: 50,
        overflow: 'hidden',
    },
    userImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    userInfocontainer: {
        gap: vh * 0.5,
    },
    userName: {
        textAlign: 'left',
        fontSize: vw * 3.8,
        color: COLORS.textColor,
        width: vw * 42
    },
    logoutContainer: {
        marginTop: vh * 2
    }
})