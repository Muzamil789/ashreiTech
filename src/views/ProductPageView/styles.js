import { StyleSheet } from "react-native";
import { vh, vw } from "../../assets/theme/dimention";
import { COLORS } from "../../assets/theme/colors";

export const styles = StyleSheet.create({
    bannerImage: {
        width: '100%',
        height: vh * 25,
    },
    containerStyle: {
        borderTopLeftRadius: vw * 8,
        borderTopRightRadius: vw * 8,
        bottom: vh * 2.5,
        flex: 1,
        paddingTop: vh * 3,
    },
    title: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: vw * 5.5,
        width: vw * 65
    },
    headerContainer: {
        flexDirection: 'row',
        gap: vw * 4
    },
    wishlistImage: {
        width: vw * 5,
        height: vw * 5,
        resizeMode: 'contain'
    },
    actionContainer: {
        flexDirection: 'row',
        width: vw * 22,
        justifyContent: 'flex-end',
        gap: vw * 2,
        // borderWidth: 1
    },
    description: {
        textAlign: 'left'
    },
    instructorRow: {
        flexDirection: 'row',
        paddingVertical: vh * .5
    },
    instructorName: {
        fontWeight: '700',
        fontSize: vw * 4
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rating: {
        fontWeight: '700'
    },
    totalStudents: {
        textAlign: 'left',
        paddingTop: vh * .5
    },
    slotContainer: {

    },
    availableSlot: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: vw * 4.5,
        paddingTop: vh
    },
    dayButton: {
        borderWidth: 1,
        borderColor: COLORS.textColor,
        borderRadius: 30,
        paddingVertical: vh * 0.6,
        width: vw * 29
    },
    dayText: {
        fontWeight: '700',
        fontSize: vw * 4
    },
    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: vw * 2,
        marginTop: vh,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: vw * 2,
        marginTop: vh * 2,
    },
    selectedButton: {
        backgroundColor: '#3A3A47',
        borderColor: '#3A3A47',
    },
    timeText: {
        fontWeight: '700',
        fontSize: vw * 3.8
    },
    selectedButtonText: {
        color: COLORS.white
    },
    buttonContainer: {
        backgroundColor: COLORS.white,
        paddingHorizontal: vw * 4,
        paddingVertical: vh * 2,
        gap: vh
    },
    enrollButton: {
        borderColor: COLORS.textColor,
        borderWidth: vw * .6,
        backgroundColor: COLORS.white
    },
    enrollButtonText: {
        color: COLORS.textColor,
        fontWeight: '700'
    },
    learnSectionWrapper: {
        marginTop: vh * 4
    },
    learnTitle: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: vw * 4.5
    },
    learnDescription: {
        textAlign: 'left',
        lineHeight: 22,
        marginTop: vh
    },
    readMoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vh * 1.5,
        gap: vw * 2
    },
    readMoreTittle: {
        fontWeight: '700'
    },
    readMoreArrow: {
        width: vw * 5,
        height: vw * 5,
        resizeMode: 'contain',
    },
    skillsSectionContainer: {
        marginTop: vh * 3
    },
    skillsSectionTitle: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: vw * 5,
        marginBottom: vh
    },
    skillsListContainer: {
        gap: vw * 2
    },
    becomeContainer: {
        marginTop: vh * 3
    },
    becomeTitle: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: vw * 5,
        marginBottom: vh
    },
    accordionContainer: {
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        borderRadius: vw * 4,
        marginTop: vh * 2
    },
    accordionHeader: {
        paddingHorizontal: vw * 5,
        paddingVertical: vw * 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f6f9'
    },
    accordionTitle: {
        fontSize: vw * 4.5,
        fontWeight: '700',
    },
    salaryContainer: {
        paddingHorizontal: vw * 5,
        paddingVertical: vw * 5
    },
    salaryTitle: {
        textAlign: 'left',
        color: '#7f7f7f',
        fontSize: vw * 4.4
    },
    salaryText: {
        fontSize: vw * 4.5,
        textAlign: 'left',
        marginTop: vh * 2,
        fontWeight: '700'
    },
    divider: {
        borderWidth: vw * .1,
        borderColor: COLORS.borderColor
    },
    companyImageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: vw * 2,
        justifyContent: 'space-between',
        marginTop: vh * 3
    },
    companyImage: {
        width: vw * 25,
        height: vw * 10,
        resizeMode: 'contain'
    }
})