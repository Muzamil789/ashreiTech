import React from 'react'
import Container from '../../../components/Container'
import { Image, TouchableOpacity, View } from 'react-native'
import { icons, images } from '../../../assets'
import { styles } from './styles'
import Button from '../../../components/Button'
import FontBold from '../../../components/Typography/FontBold'

const LoginSignupView = () => {
  return (
    <Container style={styles.mainContainer}>
      <View style={styles.loginFrameContainer}>
        <Image source={images.LoginFrame} style={styles.loginSignupFrame} />
      </View>
      <View>
        <Image source={icons.Logo} style={styles.logo} />
      </View>

      <View style={styles.btnContainer}>
        <Button name={'Login'} containerStyle={styles.loginBtn} />
        <Button name={'Signup'} containerStyle={styles.signupBtn} textStyle={styles.signupText} />
      </View>

      <TouchableOpacity style={styles.continueRow}>
        <FontBold name={'Continue as a '} style={styles.continue} />
        <FontBold name={'Guest'} style={styles.guest} />
      </TouchableOpacity>
    </Container>
  )
}

export default LoginSignupView