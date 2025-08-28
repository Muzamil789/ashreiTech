import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { tabIcons } from '../../../assets'
import { vh, vw } from '../../../assets/theme/dimention'
import { COLORS } from '../../../assets/theme/colors'
import FontBold from '../../../components/Typography/FontBold'
import FontRegular from '../../../components/Typography/FontRegular'
import Button from '../../../components/Button'

const CoursesCard = ({ courseImage, courseTitle, courseDescription, onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={courseImage} style={styles.courseImage} />
                <TouchableOpacity style={styles.wishlistContainer}>
                    <Image source={tabIcons.tabWishlist} style={styles.whishImage} />
                </TouchableOpacity>
            </View>

            <FontBold name={courseTitle} style={styles.courseTitle} />

            <FontRegular name={courseDescription} style={styles.courseDescription} numberOfLines={2} />

            <Button name={'View Details'} containerStyle={styles.viewButton} textStyle={styles.viewButtonText} onPress={onPress} />
        </View>
    )
}

export default CoursesCard

const styles = StyleSheet.create({
    container: {
        width: vw * 35,
        gap: vh * .7,
    },
    courseImage: {
        width: vw * 35,
        height: vw * 35,
        borderRadius: 10,
    },
    imageContainer: {
        position: 'relative',
    },
    wishlistContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: COLORS.white,
        padding: vw * 1.5,
        borderRadius: 100
    },
    whishImage: {
        width: vw * 4.5,
        height: vw * 4.5,
        resizeMode: 'contain'
    },
    courseTitle: {
        textAlign: 'left',
        fontWeight: '700',
        minHeight: vh * 6.5
    },
    courseDescription: {
        textAlign: 'left',
        fontSize: vw * 3
    },
    viewButton: {
        paddingVertical: vh * 1,
        width: vw * 22,
        backgroundColor: '#3BB44E',
        borderRadius: vw
    },
    viewButtonText: {
        fontSize: vw * 2.8,
        fontWeight: '700'
    }
})