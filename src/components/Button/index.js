import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import React from 'react';
import { vh, vw } from '../../assets/theme/dimention';
import { COLORS } from '../../assets/theme/colors';
import { fonts } from '../../assets/fonts';


const Button = ({
    onPress,
    name,
    textStyle,
    containerStyle,
    leftIcon
}) => {
    return (
        <TouchableOpacity
            style={[styles.buttonContent, containerStyle]}
            onPress={onPress}>
            {leftIcon && (
                <Image source={leftIcon} style={styles.btnImage} />
            )}
            <Text style={[styles.buttonText, textStyle]}>{name}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: vh * 2.2,
        backgroundColor: COLORS.MediumSeaGreen,
        borderRadius: vh * 1,
        gap: vw * 2,
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: '600',
        fontSize: vw * 4.5,
        fontFamily: fonts.FontSf.bold,
    },
    btnImage: {
        width: vw * 5,
        height: vw * 5,
        resizeMode: 'contain'
    }
});
