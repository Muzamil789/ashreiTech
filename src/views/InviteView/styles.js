import { StyleSheet } from "react-native";
import { vh, vw } from "../../assets/theme/dimention";
import { COLORS } from "../../assets/theme/colors";

export const styles = StyleSheet.create({
    bodyContainer: {
        gap: vh * 3,
        paddingBottom: vh * 2
    },
    infoContainer: {
        paddingHorizontal: vw * 3
    },
    inviteImage: {
        width: '100%',
        height: vh * 22,
        resizeMode: 'contain',
    },
    title: {
        fontSize: vw * 6,
        fontWeight: '700'
    },
    description: {
    },
    inviteContainer: {
        paddingHorizontal: vw * 3,
        paddingVertical: vw * 5,
        borderRadius: vw * 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        elevation: 2,
        gap: vh * 2,
    },
    inviteLabel: {
        fontWeight: '700',
        fontSize: vw * 4
    },
    emailContainer: {
        position: 'relative',
    },
    inviteButton: {
        position: 'absolute',
        right: 0,
        width: vw * 25,
        height: '100%',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: vw * 1.5,
        borderBottomRightRadius: vw * 1.5,
        paddingVertical: 0,
    },
    inviteButtonText: {
        fontWeight: '700',
        fontSize: vw * 3.8
    },
    emailInput: {
        backgroundColor: COLORS.white,
        paddingRight: vw * 27,
        paddingVertical: vh * 1.5,
        borderRadius: vw * 1.5
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: vw * 4
    },
    socialButtonBox: {
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        borderRadius: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        elevation: 2
    },
    socialImage: {
        width: vw * 6,
        height: vw * 6,
        resizeMode: 'contain'
    },
    howItWorksContainer: {
        gap: vh * 2
    },
    howItWorksTitle: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: vw * 4.5
    },
    stepCircle: {
        backgroundColor: COLORS.line,
        padding: vw * 6,
        borderRadius: 100
    },
    howItWorksStep: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw * 3
    },
    stepText: {

    }
})