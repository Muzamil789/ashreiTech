import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import TopView from '../../components/TopView'
import EnterEmailView from './components/EnterEmailView'
import OtpView from './components/OtpView'
import CreateNewPasswordView from './components/CreateNewPasswordView'
import Button from '../../components/Button'
import FontSemiBold from '../../components/Typography/FontSemiBold'
import { styles } from './styles'
import FontBold from '../../components/Typography/FontBold'


const ForgotPasswordView = ({
    step,
    handleNext,
    handleBack,
    email,
    setEmail,
    error,
    setOtp,
    createPassModal,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    handleSuccess

}) => {
    const returnComponents = {
        1: <EnterEmailView error={error} setEmail={setEmail} email={email} />,
        2: <OtpView setOtp={setOtp} />,
        3: <CreateNewPasswordView
            createPassModal={createPassModal}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            handleSuccess={handleSuccess}
        />
    }
    const returnTitle = {
        1: 'Forgot Password?',
        2: 'Verification Code',
        3: 'Create new password',
    };
    const returnDescription = {
        1: 'Dont worry! It occurs. Please enter the email address linked with your account.',
        2: 'Enter the verification code we just sent on your email address.',
        3: 'Your new password must be unique from those previously used.',
    };
    const returnButtonName = {
        1: 'Send Code',
        2: 'Verify',
        3: 'Reset',
    };

    return (
        <Container>
            <TopView tittle={returnTitle[step]} onPress={handleBack} />


            <FontSemiBold name={returnDescription[step]} style={styles.description} />

            <View style={styles.fieldsContainer}>
                {returnComponents[step]}

                <Button name={returnButtonName[step]} onPress={handleNext} />
            </View>

            {step === 2 && (
                <TouchableOpacity style={styles.continueRow}>
                    <FontBold name={'Didn’t received code? '} style={styles.continue} />
                    <FontBold name={'Resend'} style={styles.guest} />
                </TouchableOpacity>
            )}
        </Container>
    )
}

export default ForgotPasswordView