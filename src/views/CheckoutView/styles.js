import { StyleSheet } from "react-native";
import { vh, vw } from "../../assets/theme/dimention";
import { COLORS } from "../../assets/theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: vh
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vh
    },
    total: {
        fontSize: vw * 4
    },
    totalAmount: {
        fontSize: vw * 4.5,
        fontWeight: '700',
    },
    applyButton: {
        backgroundColor: COLORS.white,
        borderWidth: 2
    },
    applyButtonText: {
        color: COLORS.textColor,
        fontWeight: '700'
    },
    bottomContainer: {
        gap: vh
    },
    singleCourseContainer: {
        borderWidth: 2,
        paddingHorizontal: vw * 4,
        paddingVertical: vw * 3,
        borderRadius: 6,
        borderColor: COLORS.borderColor,
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw * 4,
    },
    coursesImge: {
        width: vw * 25,
        height: vw * 25,
        borderRadius: vw * 2.5
    },
    courseHeading: {
        textAlign: 'left',
        fontSize: vw * 4.5
    },
    courseName: {
        textAlign: 'left',
        fontSize: vw * 5,
        fontWeight: '700',
    },
    coursePrice: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: vw * 4
    },
    detailContainer: {
        gap: 5
    },
    coursesContainer: {
        gap: vh * 2
    },
    userContainer: {
        paddingHorizontal: vw * 4,
        paddingVertical: vw * 5,
        backgroundColor: COLORS.UserBackground,
        borderRadius: vw * 3,
        marginVertical: vh * 2,
    },
    userName: {
        textAlign: 'left',
        fontSize: vw * 4
    }
})