import { COLORS } from "../../../assets/theme/colors";
import { vh, vw } from "../../../assets/theme/dimention";

const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
    },
    loginFrameContainer: {
        // alignContent: 'center'
    },
    loginSignupFrame: {
        width: vw * 40,
        height: vw * 40,
    },
    logo: {
        width: vw * 70,
        height: vw * 20,
        resizeMode: 'contain',
        marginTop: vh * 5,
        marginBottom: vh * 7
    },
    loginBtn: {
    },
    signupBtn: {
        backgroundColor: COLORS.white,
        borderWidth: vw * 0.3,
        borderColor: COLORS.MediumSeaGreen,
        color: COLORS.textColor
    },
    btnContainer: {
        width: '100%',
        gap: vh * 1.5
    },
    signupText: {
        color: COLORS.textColor,
        fontWeight: '700'
    },
    continueRow: {
        flexDirection: 'row',
        marginTop: vh * 5,
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