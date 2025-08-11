import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { vw } from '../../../assets/theme/dimention';
import { COLORS } from '../../../assets/theme/colors';
import { fonts } from '../../../assets/fonts';


const FontBold = ({
    name,
    numberOfLines,
    style,
    ...rest
}) => {
    return (
        <Text
            {...rest}
            numberOfLines={numberOfLines}
            allowFontScaling={false}
            style={[styles.textStyle, style]}>
            {name}
        </Text>
    );
};

export default FontBold;

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: fonts.FontSf.bold,
        textAlign: 'center',
        color: COLORS.textColor,
        fontSize: vw * 3.8,
        fontWeight: '600',
    },
});
