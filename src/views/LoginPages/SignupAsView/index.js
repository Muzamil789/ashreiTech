import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import TopView from '../../../components/TopView'
import { styles } from './styles'
import { icons, images } from '../../../assets'
import FontBold from '../../../components/Typography/FontBold'
import Button from '../../../components/Button'
import { useNavigation } from '@react-navigation/native'



const SignupAsView = () => {
    const navigation = useNavigation()
    const handleAsSignup = () => {
        navigation.navigate('Signup')
    }

    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <Container style={styles.mainContainer}>
            <TopView onPress={handleBack} />

            <View style={styles.innerContainer}>
                <View style={styles.frameBox}>
                    <Image source={images.signupAs} style={styles.frameImage} />
                </View>
                <View style={styles.discriptionBox}>
                    <FontBold name={'Start Your Journey To A'} style={styles.start} />
                    <FontBold name={'Seamless Tech Education'} style={styles.seamless} />
                </View>
                <View style={styles.btnContainer}>
                    <Button name={'Signup as a Student'} containerStyle={styles.btnStudent} onPress={handleAsSignup} />
                    <Button name={'Signup as a Organization'} containerStyle={styles.btnOrganization} textStyle={styles.OrganizationText} />
                    <Button name={'Signup as an Instructor'} containerStyle={styles.btnOrganization} textStyle={styles.OrganizationText} />
                </View>
                <View style={styles.socialContainer}>

                    <View style={styles.horizontalLine}>
                        <View style={styles.line} />
                        <FontBold style={styles.lineText} name={'Or Login with'} />
                        <View style={styles.line} />
                    </View>

                    <View style={styles.socialRow}>
                        <TouchableOpacity>
                            <Image source={icons.facebookIcon} style={styles.socialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={icons.googleIcon} style={styles.socialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={icons.appleIcon} style={styles.socialIcon} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Container>
    )
}

export default SignupAsView