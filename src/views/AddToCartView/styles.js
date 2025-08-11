import { StyleSheet } from "react-native";
import { vh, vw } from "../../assets/theme/dimention";
import { COLORS } from "../../assets/theme/colors";

export const styles = StyleSheet.create({

    SingleItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: '5%',
        borderBottomWidth: 1,
        paddingVertical: vh * 2,
        borderBottomColor: COLORS.borderColor
    },
    itemImage: {
        width: '100%',
        height: vw * 30,
        borderRadius: 7,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw
    },
    itemHeading: {
        fontSize: vw * 6,
        textAlign: 'left',
        fontWeight: '700',
        color: COLORS.textColor,
    },
    imageContainer: {
        width: '35%'
    },
    ItemDetailContainer: {
        width: '60%',
        gap: vh * 1
    },
    itemSellPrice: {
        color: COLORS.textColor,
        fontSize: vw * 4,
        fontWeight: '700'
    },
    itemFullPrice: {
        color: '#6A707C',
        fontSize: vw * 3,
        textDecorationLine: 'line-through',
    },
    OffPercent: {
        textAlign: 'left',
        fontWeight: '400',
        fontSize: vw * 3.5,
    },
    saveLaterContainer: {
        flexDirection: 'row',
        gap: vw * 3
    },
    saveLatterRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw * 1
    },
    saveLatterImg: {
        width: vw * 4,
        height: vw * 4,
        resizeMode: 'contain',
    },
    saveLaterText: {
        fontSize: vw * 3.5,
    },
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
    bottomContainer: {
        gap: vh
    },
    applyButton: {
        backgroundColor: COLORS.white,
        borderWidth: 2
    },
    applyButtonText: {
        color: COLORS.textColor,
        fontWeight: '700'
    }
})