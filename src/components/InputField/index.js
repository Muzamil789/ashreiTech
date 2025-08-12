import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { vh, vw } from '../../assets/theme/dimention'
import { COLORS } from '../../assets/theme/colors'
import { fonts } from '../../assets/fonts'
import MaskInput from 'react-native-mask-input';
import { icons } from '../../assets'
import FontRegular from '../Typography/FontRegular'


const InputField = ({
    placeholder,
    style,
    mask = false,
    autoFocus = false,
    keyboardType,
    value,
    multiline,
    maxLength,
    editable = true,
    allowCopyPaste = true,
    secureTextEntry = false,
    rightIcon,
    onChangeText,
    onSubmitEditing,
    returnKeyType,
    error,
    // leftIcon,
    leftIconPath,
    handleUploadDocument,
    uploadIcon,
    placeholderTextColor,
    ...rest

}) => {
    const InputComponent = mask ? MaskInput : TextInput;
    const [showPassword, setShowPassword] = useState(secureTextEntry);

    return (
        <View style={styles.Container}>
            {leftIconPath && (
                <Image source={leftIconPath} style={styles.leftIcon} />
            )}
            <InputComponent
                placeholder={placeholder}
                style={[styles.InputField, style,
                { paddingLeft: leftIconPath ? vw * 14 : vw * 4 }
                ]}
                placeholderTextColor={placeholderTextColor || COLORS.textColor}
                mask={mask}
                autoFocus={autoFocus}
                keyboardType={keyboardType}
                multiline={multiline}
                maxLength={maxLength}
                value={value}
                editable={editable}
                onSubmitEditing={onSubmitEditing}
                onChangeText={onChangeText}
                autoCapitalize="none"
                returnKeyType={returnKeyType}
                contextMenuHidden={!allowCopyPaste}
                selectTextOnFocus={allowCopyPaste}
                secureTextEntry={showPassword}
                {...rest}
            />
            {(secureTextEntry || rightIcon) && (
                <TouchableOpacity
                    onPress={() => setShowPassword(prev => !prev)}
                    style={styles.iconContainer}
                >
                    <Image
                        source={
                            showPassword ? icons.eyeClose : icons.eyeOpen
                        }
                        style={styles.icon}
                    />
                </TouchableOpacity>
            )}

            {uploadIcon && (
                <TouchableOpacity style={styles.uploadIconContainer} onPress={handleUploadDocument}>
                    <Image source={icons.uploadDocument} style={styles.uploadIcon} />
                </TouchableOpacity>
            )}
            {error ? <FontRegular name={error} style={styles.errorText} /> : null}
        </View>
    )
}

export default InputField


const styles = StyleSheet.create({
    Container: {
        position: 'relative'
    },
    InputField: {
        width: '100%',
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        backgroundColor: COLORS.inputBackground,
        borderRadius: vw * 2,
        paddingHorizontal: vw * 4,
        paddingVertical: vh * 2,
        fontSize: vw * 3.8,
        fontFamily: fonts.FontSf.bold,
        color: COLORS.textColor
    },
    icon: {
        width: vw * 8,
        height: vw * 8
    },
    iconContainer: {
        position: 'absolute',
        top: '28%',
        right: vw * 5
    },
    errorText: {
        color: 'red',
        textAlign: 'left'
    },
    leftIcon: {
        width: vw * 6,
        height: vw * 6,
        resizeMode: 'contain',
        position: 'absolute',
        top: '31%',
        left: '5%',
        zIndex: 11,
    },
    uploadIconContainer: {
        position: 'absolute',
        top: '36%',
        right: vw * 5
    },
    uploadIcon: {
        width: vw * 5,
        height: vw * 5,
        resizeMode: 'contain',
    }
})