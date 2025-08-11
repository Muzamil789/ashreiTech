import React from 'react'
import TopView from '../../../components/TopView'
import Container from '../../../components/Container'
import { Image, TouchableOpacity, View } from 'react-native'
import { icons } from '../../../assets'
import { styles } from './styles'
import InputField from '../../../components/InputField'
import FontBold from '../../../components/Typography/FontBold'
import FontSemiBold from '../../../components/Typography/FontSemiBold'
import Button from '../../../components/Button'

const LoginView = ({ handleLogin, handleForgotPassword, handleSignUp }) => {
    return (
        <Container>
            <TopView />

            <View style={styles.loginContainer}>
                <Image source={icons.Login} style={styles.loginIcon} />
            </View>

            <View style={styles.fieldsContainer}>
                <FontBold name={'Login'} style={styles.loginText} />
                <InputField placeholder={'Enter your email'} />
                <InputField placeholder={'Enter your password'} rightIcon={true} />
                <TouchableOpacity onPress={handleForgotPassword}>
                    <FontSemiBold name={'Forgot Password?'} style={styles.forgotText} />
                </TouchableOpacity>
                <Button name={'Login'} onPress={handleLogin} />

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

                <View style={styles.continueRow}>
                    <FontBold name={'Don’t have an account? '} style={styles.continue} />
                    <TouchableOpacity onPress={handleSignUp}>
                        <FontBold name={'Signup'} style={styles.guest} />
                    </TouchableOpacity>
                </View>
            </View>

        </Container>
    )
}

export default LoginView