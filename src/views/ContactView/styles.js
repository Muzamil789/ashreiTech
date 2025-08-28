import { StyleSheet } from "react-native";
import { vh, vw } from "../../assets/theme/dimention";

export const styles = StyleSheet.create({
    courseNameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: vh * 1.5
    },
    coursetitle: {
        fontWeight: '700',
    },
    nextArrow: {
        width: vw * 4,
        height: vw * 4
    },
})