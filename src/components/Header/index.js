import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { vh, vw } from '../../assets/theme/dimention'
import { icons, images } from '../../assets'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
            >
                <Image source={icons.navIcon} style={styles.drawerIcon} />
            </TouchableOpacity>
            <View>
                <Image source={images.ashreiTechLogo} style={styles.logo} />
            </View>
            <View style={styles.searchContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Image source={icons.headerSearch} style={styles.headerIcons} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={icons.headerAccount} style={styles.headerIcons} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: vw * 4,
        paddingHorizontal: vw * 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 8,
        zIndex: 111

    },
    drawerIcon: {
        width: vw * 7,
        height: vw * 7,
        resizeMode: 'contain',
    },
    logo: {
        width: vw * 30,
        height: vh * 4.5,
        resizeMode: 'contain'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw * 3
    },
    headerIcons: {
        width: vw * 7,
        height: vw * 7,
        resizeMode: 'contain',
    }
})