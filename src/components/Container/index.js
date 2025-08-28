import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../assets/theme/colors';
import { vw } from '../../assets/theme/dimention';

const Container = ({ children, style }) => {
    return <View style={[styles.container, style]}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: vw * 4,
    },
});