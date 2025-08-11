import { StyleSheet } from "react-native";
import { vh, vw } from "../../assets/theme/dimention";

export const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: vw * 2,
        gap: vh * 2,
        marginTop: vh * 2
    },
    courseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    courseDetailContainer: {
        width: vw * 60,
    },
    imageContainer: {
    },
    courseImage: {
        width: vw * 27,
        height: vw * 27,
        resizeMode: 'contain',
        borderRadius: 50,
    },
    courseHeading: {
        textAlign: 'left',
        fontSize: vw * 5,
        fontWeight: '700',
        marginBottom: vh * 1,
    },
    durationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw * 2
    },
    timeIcon: {
        width: vw * 5,
        height: vw * 5,
        resizeMode: 'contain',
    },
    texRrow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coursesInsideContainer: {
        gap: vh * 1
    },
    durationText: {
        fontSize: vw * 3.2
    }
})