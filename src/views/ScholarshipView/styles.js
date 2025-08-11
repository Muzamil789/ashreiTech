import { StyleSheet } from "react-native";
import { vh, vw } from "../../assets/theme/dimention";
import { nativeViewHandlerName } from "react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler";
import { fonts } from "../../assets/fonts";
import { COLORS } from "../../assets/theme/colors";

export const styles = StyleSheet.create({
    topContainer: {
        marginHorizontal: vw * 10,
        textAlign: 'center',
        alignItems: 'center',
        gap: vh,
        marginBottom: vh * 2
    },
    scholarshipImage: {
        width: vw * 38,
        height: vw * 38,
        resizeMode: 'contain',
    },
    applyFor: {
        fontSize: vw * 8.5,
        fontWeight: '700'
    },
    wantTo: {
        textAlign: 'center',
        fontSize: vw * 5,
        fontFamily: fonts.FontSf.bold,
        color: COLORS.textColor,
    },
    scholarship: {
        fontWeight: '700',
        fontSize: vw * 5.5,
        color: COLORS.MediumSeaGreen,
        textDecorationLine: 'underline'
    },
    fieldsContainer: {
        gap: vh * 2.5,
        marginBottom: vh * 3
    },
    statement: {
        height: vh * 18,
        textAlignVertical: 'top'
    }
})