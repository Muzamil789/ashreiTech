import { View, Text } from 'react-native'
import React from 'react'
import { OtpInput } from 'react-native-otp-entry'
import { COLORS } from '../../../assets/theme/colors'
import { styles } from '../styles'

const OtpView = ({ setOtp }) => {
    return (
        <View>
            <OtpInput
                numberOfDigits={4}
                focusColor={COLORS.MediumSeaGreen}
                autoFocus={true}
                hideStick={true}
                type="numeric"
                secureTextEntry={false}
                onTextChange={(text) => setOtp(text)}
                theme={{
                    containerStyle: styles.Otpcontainer,
                    pinCodeContainerStyle: styles.pinCodeContainer,
                    pinCodeTextStyle: styles.pinCodeText,
                    focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                    filledPinCodeContainerStyle: styles.filledPinCodeContainer,
                }}
            />
        </View>
    )
}

export default OtpView