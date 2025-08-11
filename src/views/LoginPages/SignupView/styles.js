import { StyleSheet } from "react-native";
import { vh, vw } from "../../../assets/theme/dimention";

export const styles = StyleSheet.create({
    image: {
        width: vw * 35,
        height: vw * 35,
        borderRadius: 100,

    },
    imageContainer: {
        alignSelf: 'center',
        position: 'relative',
        marginTop: vh * 6,
        marginBottom: vh * 4
    },
    cameraTouchable: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cameraImage: {
        width: vw * 10,
        height: vw * 10,
        resizeMode: 'contain'
    },
    InputContainer: {
        gap: vh * 2
    }
})