import { StyleSheet } from "react-native";
import { vh, vw } from "../../../assets/theme/dimention";
import { COLORS } from "../../../assets/theme/colors";

export const styles = StyleSheet.create({
    loginText: {
        fontSize: vw * 6,
        fontWeight: '700',
    },
    loginIcon: {
        width: vw * 20,
        height: vw * 40,
        resizeMode: 'contain'
    },
    loginContainer: {
        alignItems: 'center'
    },
    fieldsContainer: {
        gap: vh * 2
    },
    forgotText: {
        textAlign: 'right',
        fontWeight: '600'
    },
    horizontalLine: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.line,
    },
    lineText: {
        marginHorizontal: 15,
        fontWeight: '600',
        fontSize: vw * 4.5
    },
    socialRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw * 2
    },
    socialIcon: {
        width: vw * 30,
        height: vw * 20,
        resizeMode: 'contain'
    },
    continueRow: {
        flexDirection: 'row',
        justifyContent: 'center',
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