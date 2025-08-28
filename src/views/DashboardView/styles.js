import { StyleSheet } from "react-native";
import { vh, vw } from "../../assets/theme/dimention";
import { COLORS } from "../../assets/theme/colors";

export const styles = StyleSheet.create({
    backgroundImage: {
        height: vh * 30,
    },
    seamlessContainer: {
        position: 'absolute',
        left: vw * 5,
        top: vh * 4
    },
    seamlessTitle: {
        textAlign: 'left',
        fontSize: vw * 8,
        fontWeight: '700',
        marginBottom: vh * 1.5
    },
    browseButtonContainer: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: vw * 1.3
    },
    browseButtonText: {
        color: COLORS.textColor,
        fontWeight: '700'
    },
    headingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vh * 1.5
    },
    categoriesContainer: {
        paddingVertical: vh * 4
    },
    categoryHeading: {
        fontSize: vw * 5,
        fontWeight: '700'
    },
    viewAll: {
        textDecorationLine: 'underline',
        fontSize: vw * 3.5,
    },
    singleCourseCategory: {
        borderWidth: 1,
        paddingVertical: vh,
        paddingHorizontal: vw * 2,
        borderRadius: vw * 5,
        alignSelf: 'flex-start'
    },
    singleCourseTitle: {
        textAlign: 'left',
        fontWeight: '700'
    },
})