import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { vh, vw } from '../../assets/theme/dimention';
import { COLORS } from '../../assets/theme/colors';
import { icons } from '../../assets';
import FontBold from '../Typography/FontBold';


const CheckBox = ({ onPressCheckBox, isChecked, description, containerStyle }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity
                onPress={() => {
                    if (onPressCheckBox) {
                        onPressCheckBox()
                    }
                }}
                style={styles.square}>
                {isChecked && <Image style={styles.tickIcon} source={icons.check} />}
            </TouchableOpacity>
            <FontBold style={styles.descriptionText} name={description} />
        </View>
    );
};
export default CheckBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    square: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: vw * 1,
        borderColor: COLORS.black,
        height: vh * 1.9,
        width: vw * 3.9,
    },
    descriptionText: {
        color: COLORS.textColor,
        marginLeft: vw * 2,
        fontSize: vw * 3.5,
    },
    tickIcon: {
        height: '120%',
        width: '120%',
        resizeMode: 'contain',
        marginRight: -vw * 1.5,
        marginTop: -vh * 0.5,
    },
});
