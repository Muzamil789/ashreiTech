import React from 'react'
import Container from '../../components/Container'
import TopView from '../../components/TopView'
import { styles } from './styles'
import { Image, ScrollView, View } from 'react-native'
import { icons, notificationIcons } from '../../assets'
import FontBold from '../../components/Typography/FontBold'
import FontSemiBold from '../../components/Typography/FontSemiBold'

const NotificationView = ({ goBack }) => {
    return (
        <Container>
            <TopView tittle={'Notification'} onPress={goBack} />

            <ScrollView>


                <View style={styles.container}>
                    <FontBold name={'Today'} style={styles.dayTittle} />
                    <View style={styles.notificationsLayout}>
                        <View style={styles.notificationBox}>
                            <View style={styles.notifictionImageBox}>
                                <Image source={notificationIcons.notificationDiscount} style={styles.notificationIcon} />
                            </View>
                            <View style={styles.notificationInfo}>
                                <FontBold name={'30% Special Discount!'} style={styles.notificationHeading} numberOfLines={2} />
                                <FontSemiBold name={'Special promotion only valid today'} numberOfLines={2} style={styles.notificationShortTxt} />
                            </View>
                        </View>
                    </View>
                </View>


                <View style={styles.container}>
                    <FontBold name={'Yesterday'} style={styles.dayTittle} />
                    <View style={styles.notificationsLayout}>
                        <View style={styles.notificationBox}>
                            <View style={styles.notifictionImageBox}>
                                <Image source={notificationIcons.notificationScholarship} style={styles.notificationIcon} />
                            </View>
                            <View style={styles.notificationInfo}>
                                <FontBold name={'Apply for scholarship'} style={styles.notificationHeading} numberOfLines={2} />
                                <FontSemiBold name={'Looking for a fully-funded scholarship'} numberOfLines={2} style={styles.notificationShortTxt} />
                            </View>
                        </View>

                        <View style={styles.notificationBox}>
                            <View style={styles.notifictionImageBox}>
                                <Image source={notificationIcons.NotificationLocation} style={styles.notificationIcon} />
                            </View>
                            <View style={styles.notificationInfo}>
                                <FontBold name={'Upcoming Courses!'} style={styles.notificationHeading} numberOfLines={2} />
                                <FontSemiBold name={'Registration will be confirmed on first come first serve basis'} numberOfLines={2} style={styles.notificationShortTxt} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <FontBold name={'August 05, 2023'} style={styles.dayTittle} />
                    <View style={styles.notificationsLayout}>
                        <View style={styles.notificationBox}>
                            <View style={styles.notifictionImageBox}>
                                <Image source={notificationIcons.notificationAccount} style={styles.notificationIcon} />
                            </View>
                            <View style={styles.notificationInfo}>
                                <FontBold name={'Account Setup Successful!'} style={styles.notificationHeading} numberOfLines={2} />
                                <FontSemiBold name={'Your account has been created!'} numberOfLines={2} style={styles.notificationShortTxt} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Container>
    )
}

export default NotificationView