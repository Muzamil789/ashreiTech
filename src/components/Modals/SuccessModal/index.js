import { StyleSheet, Modal, View, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../../assets/theme/colors'
import { Text } from 'react-native-svg'
import { vh, vw } from '../../../assets/theme/dimention'
import { icons } from '../../../assets'
import FontBold from '../../Typography/FontBold'
import FontSemiBold from '../../Typography/FontSemiBold'
import Button from '../../Button'

const SuccessModal = ({ modalVisible, heading, description, buttonText, onPress }) => {
    return (
        <Modal
            animationType="slide"
            transparent
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image source={icons.success} style={styles.successLogo} />

                    <FontBold name={heading} style={styles.heading} />

                    <FontSemiBold name={description} style={styles.description} />

                    <Button name={buttonText || 'Continue'} containerStyle={styles.buttonStyle} onPress={onPress} />
                </View>
            </View>
        </Modal>
    )
}

export default SuccessModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
        width: vw * 80,
        height: vh * 50,
        justifyContent: 'center',
        alignItems: 'center',
        gap: vh * 2
    },
    successLogo: {
        width: vw * 30,
        height: vw * 30
    },
    heading: {
        fontSize: vw * 8,
        fontWeight: '700',
        color: COLORS.modalHeading
    },
    description: {
        fontSize: vw * 4.3,
        color: COLORS.modalDescription
    },
    buttonStyle: {
        width: vw * 50
    }

})