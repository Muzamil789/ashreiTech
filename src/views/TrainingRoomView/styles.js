import { StyleSheet } from "react-native";
import { vh, vw } from "../../assets/theme/dimention";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
    },
    roomsContainer: {
        gap: vw * 2,
        height: vh * 10,
    },
    roomImage: {
        width: vw * 30,
        height: '100%',
        resizeMode: 'contain',
        borderRadius: vw * 3,
    },
})