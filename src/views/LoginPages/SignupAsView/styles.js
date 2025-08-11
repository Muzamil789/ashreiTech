import { StyleSheet } from "react-native";
import { vh, vw } from "../../../assets/theme/dimention";
import { COLORS } from "../../../assets/theme/colors";

export const styles = StyleSheet.create({
    mainContainer: {
    },
    innerContainer: {
        gap: vh * 3.5,
        justifyContent: 'center',
        alignContent: 'center',
    },
    frameBox: {
        alignItems: 'center',
        marginBottom: vh * 1
    },
    frameImage: {
        width: vw * 40,
        height: vw * 40,
        resizeMode: 'contain',
    },
    discriptionBox: {

    },
    start: {
        fontWeight: '700',
        fontSize: vw * 5
    },
    seamless: {
        fontWeight: '700',
        fontSize: vw * 6.8
    },
    btnContainer: {
        gap: vh * 1.5
    },
    btnOrganization: {
        backgroundColor: COLORS.white,
        borderWidth: 1.3,
        borderColor: COLORS.MediumSeaGreen
    },
    OrganizationText: {
        color: COLORS.textColor,
    },




    socialContainer: {
        gap: vh * 1
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
        fontSize: vw * 4.5
    },
    socialRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw * 2,
    },
    socialIcon: {
        width: vw * 30,
        height: vw * 20,
        resizeMode: 'contain'
    },
})