import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import LoginSignup from './src/screens/LoginPages/LoginSignup'
import Login from './src/screens/LoginPages/Login'
import Container from './src/components/Container'
import { COLORS } from './src/assets/theme/colors'
import SignupAs from './src/screens/LoginPages/SignupAs'
import Signup from './src/screens/LoginPages/Signup'
import ForgotPassword from './src/screens/ForgotPassword'
import Dashboard from './src/screens/Dashboard'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/Navigation/MainStack'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
    <View style={styles.Container}>
      {/* <LoginSignup /> */}
      {/* <Login /> */}
      {/* <SignupAs /> */}
      {/* <Signup /> */}
      {/* <ForgotPassword /> */}


      <Provider store={store}>
        <NavigationContainer>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={COLORS.white}
          />
          <MainStack />
        </NavigationContainer>
      </Provider>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.white,
    minHeight: '100%'
  }
})