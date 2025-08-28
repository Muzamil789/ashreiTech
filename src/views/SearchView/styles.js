import { StyleSheet } from "react-native";
import { vh, vw } from "../../assets/theme/dimention";

export const styles = StyleSheet.create({
    bodyContainer: {
        paddingTop: vh * 2,
        // flexGrow: 0,
        // flex: 0
    },
    topSearchesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: vh * 2
    },
    topSearches: {
        fontSize: vw * 4.5,
        fontWeight: '700'
    },
    searchBackImg: {
        width: vw * 6,
        height: vw * 6
    },
    searchInput: {
        backgroundColor: '#F1F1F1',
        borderWidth: 0
    },
    topSearchesText: {
        borderWidth: 1,
        borderRadius: 25,
        textAlign: 'left',
        paddingHorizontal: vw * 2,
        paddingVertical: vw * 3,
        fontWeight: '700'
    },
    topSearchesFlatList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: vw * 3,
        marginTop: vh * 2,
    },
    browseCategories: {
        fontSize: vw * 4.5,
        fontWeight: '700',
        textAlign: 'left',
        marginTop: vh * 3
    },
    FlatListStyle: {
        paddingBottom: vh
    },
    courseNameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: vh * 1.5
    },
    coursetitle: {
        fontWeight: '700'
    },
    nextArrow: {
        width: vw * 4,
        height: vw * 4
    },
    searchesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: vw * 2,
        marginTop: vh * 2
    }
})