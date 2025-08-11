import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/theme/colors";
import { vh, vw } from "../../assets/theme/dimention";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: vw * 3,
        marginTop: vh * 2,
        marginBottom: vh * 4
    },
    userImageBox: {
        borderWidth: vw * .5,
        borderColor: COLORS.profileBorder,
        width: vw * 16,
        height: vw * 16,
        borderRadius: 50,
        overflow: 'hidden',
    },
    userImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    userInfocontainer: {
        gap: vh * 0.5,
        width: vw * 60,
    },
    userName: {
        textAlign: 'left',
        fontSize: vw * 4.5,
        color: COLORS.textColor,
        fontWeight: '700'
    },
    userEmail: {
        textAlign: 'left',
        fontSize: vw * 4.5,
        color: COLORS.textColor,
        fontWeight: '400'
    },
    profileEditRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: vw * 70
    },
    editPencil: {
        width: vw * 6,
        height: vw * 6,
        resizeMode: 'contain',
    },
    fieldsContainer: {
        gap: vh * 2,
        paddingHorizontal: vw * 3
    },
    btnContainer: {
        width: vw * 40,
        paddingVertical: vh * 1.5,
    },
    btnText: {
        fontSize: vw * 4
    },
    rateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw * 2,
        paddingLeft: vw
    },
    rateIcon: {
        width: vw * 6,
        height: vw * 6
    },

})