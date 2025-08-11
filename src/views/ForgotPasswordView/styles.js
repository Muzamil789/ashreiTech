import { COLORS } from "../../assets/theme/colors"
import { vh, vw } from "../../assets/theme/dimention"

const { StyleSheet } = require("react-native")

export const styles = StyleSheet.create({
    description: {
        textAlign: 'left',
        fontSize: vw * 4.6,
        marginTop: vh * 1,
        marginBottom: vh * 4
    },
    newPassContainer: {
        gap: vh * 2
    },
    fieldsContainer: {
        gap: vh * 3.5
    },
    Otpcontainer: {},
    pinCodeContainer: {
        width: vw * 18
    },
    activePinCodeContainer: {
        backgroundColor: '#F7F8F9',
        // borderColor: '#E9E9E9',
        borderColor: COLORS.MediumSeaGreen

    },
    filledPinCodeContainer: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.MediumSeaGreen
    },
    pinCodeText: {
        color: COLORS.textColor,
    },
    placeholderText: {
        color: 'red'
    },
    resendContainer: {
        marginTop: vh * 4
    },
    continueRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: vh * 4
    },
    continue: {
        color: COLORS.textColor,
        fontWeight: '600',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.textColor
    },
    guest: {
        color: COLORS.MediumSeaGreen,
        fontWeight: '600',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.MediumSeaGreen
    }
})