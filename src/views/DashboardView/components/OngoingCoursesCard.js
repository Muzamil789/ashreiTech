import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { tabIcons } from '../../../assets'
import { vh, vw } from '../../../assets/theme/dimention'
import { COLORS } from '../../../assets/theme/colors'
import FontBold from '../../../components/Typography/FontBold'

const OngoingCoursesCard = ({ courseImage, courseTitle, courseDescription, onPress }) => {
    return (
        <ImageBackground style={styles.container} source={courseImage}>
            <View style={styles.overlay} />
            <View style={{ height: vh * 4 }}>
                <TouchableOpacity style={styles.wishlistContainer}>
                    <Image source={tabIcons.tabWishlist} style={styles.whishImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <FontBold name={courseTitle} style={styles.courseTitle} numberOfLines={2} />
                <FontBold name={courseDescription} style={styles.courseDescription} numberOfLines={2} />
                <TouchableOpacity>
                    <FontBold name={'View Details'} style={styles.viewAll} onPress={onPress} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default OngoingCoursesCard



const styles = StyleSheet.create({
    container: {
        width: vw * 35,
        gap: vh * .7,
        height: vw * 50,
        borderRadius: 10,
        justifyContent: 'space-between',
        paddingHorizontal: vw,
        paddingVertical: vw,
        overflow: 'hidden',
    },
    wishlistContainer: {
        position: 'absolute',
        top: 8,
        right: 6,
        backgroundColor: COLORS.white,
        padding: vw * 1.5,
        borderRadius: 100
    },
    whishImage: {
        width: vw * 4.5,
        height: vw * 4.5,
        resizeMode: 'contain',
    },
    courseTitle: {
        textAlign: 'left',
        fontWeight: '700',
        // minHeight: vh * 6.5,
        color: COLORS.white
    },
    courseDescription: {
        textAlign: 'left',
        fontSize: vw * 3,
        color: COLORS.white
    },
    viewAll: {
        color: COLORS.white,
        textAlign: 'left',
        fontSize: vw * 3,
        fontWeight: '700',
        textDecorationLine: 'underline',
    },
    infoContainer: {
        gap: vh * .5
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
})