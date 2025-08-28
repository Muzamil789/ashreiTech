import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import FontBold from '../../components/Typography/FontBold'
import { icons } from '../../assets'

const FooterView = () => {
    return (
        <View style={styles.container}>
            <FontBold name={`Copyright © ${new Date().getFullYear()} AshreiTech`} style={styles.copyright} />
            <View style={styles.socialContainer}>
                <Image source={icons.twitterLogo} style={styles.socialIcon} />
                <Image source={icons.linkedInLogo} style={styles.socialIcon} />
                <Image source={icons.facebookLogo} style={styles.socialIcon} />
                <Image source={icons.youtubeLogo} style={styles.socialIcon} />
            </View>
        </View>
    )
}
styles
export default FooterView