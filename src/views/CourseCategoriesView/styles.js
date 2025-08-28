import { StyleSheet } from "react-native";
import { vh, vw } from "../../assets/theme/dimention";

export const styles = StyleSheet.create({
    bodyContainer: {
        paddingVertical: vh * 4
    },
    courseContainer: {
        flexDirection: 'row',
        gap: vw * 2,
        height: vw * 26,
    },
    courseImageContainer: {
        width: vw * 25,
        height: vw * 26,
    },
    CourseImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    infoContainer: {
        width: vw * 65,
        justifyContent: 'space-between'
    },
    courseTitle: {
        fontSize: vw * 3.8,
        textAlign: 'left',
        fontWeight: '700'
    },
    courseDescription: {
        textAlign: 'left',
        fontSize: vw * 3,
        marginVertical: vh * .4
    },
    coursePriceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    coursePrice: {
        fontSize: vw * 4,
        fontWeight: '700'
    },
    detailButton: {
        paddingVertical: vh * .8,
        paddingHorizontal: vw * 3,
        backgroundColor: '#3BB44E',
        borderRadius: vw
    },
    detailButtonText: {
        fontSize: vw * 3
    },
    FlatListContainer: {
        gap: vh * 3
    }
})