import { StyleSheet } from "react-native";
import { vh, vw } from "../../assets/theme/dimention";
import { COLORS } from "../../assets/theme/colors";

export const styles = StyleSheet.create({
    container: {
        marginTop: vh * 3,
        gap: vh * 3
    },
    notificationBox: {
        backgroundColor: COLORS.notificationBackground,
        paddingHorizontal: vw * 5,
        paddingVertical: vh * 2,
        borderRadius: 16,
        flexDirection: 'row',
        gap: vw * 6,
    },
    notifictionImageBox: {
        backgroundColor: COLORS.MediumSeaGreen,
        width: vw * 20,
        height: vw * 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    notificationIcon: {
        width: vw * 10,
        height: vw * 10,
    },
    notificationInfo: {
        gap: vh
    },
    notificationHeading: {
        fontWeight: '700',
        textAlign: 'left',
        fontSize: vw * 5.5,
        width: vw * 56,

    },
    notificationShortTxt: {
        textAlign: 'left',
        width: vw * 56,
        fontSize: vw * 4
    },
    dayTittle: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: vw * 5.5
    },
    notificationsLayout: {
        gap: vh * 3
    }
})