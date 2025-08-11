import { StyleSheet } from "react-native";
import { vh, vw } from "../../assets/theme/dimention";
import { COLORS } from "../../assets/theme/colors";

export const styles = StyleSheet.create({
    mainHeading: {
        fontSize: vw * 7,
        textAlign: 'left',
        fontWeight: '700',
        marginTop: vh * 1,
        marginBottom: vh * 2
    },
    faqBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: vw * 5,
        paddingVertical: vh,
    },
    faqArrow: {
        width: vw * 5,
        height: vw * 5,
    },
    faqDiscription: {
        textAlign: 'left',
        width: '88%',
    },
    arrowTouchable: {
        width: '9%',
        height: vw * 8,
    },
    faqLayout: {
        gap: vh * 0.2
    }
})