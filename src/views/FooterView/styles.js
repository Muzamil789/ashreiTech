import { StyleSheet } from "react-native";
import { vw } from "../../assets/theme/dimention";
import { COLORS } from "../../assets/theme/colors";

export const styles = StyleSheet.create({
    container: {
        padding: vw * 4,
        backgroundColor: COLORS.footerBackground,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    copyright: {
        textAlign: 'left',
        fontSize: vw * 3,
        color: COLORS.white,
        fontWeight: '700'
    },
    socialContainer: {
        flexDirection: 'row',
        gap: vw * 4
    },
    socialIcon: {
        width: vw * 4.5,
        height: vw * 4.5
    }
})