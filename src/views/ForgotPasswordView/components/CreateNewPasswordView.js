import { View, Text } from 'react-native'
import React from 'react'
import InputField from '../../../components/InputField'
import { styles } from '../styles'
import SuccessModal from '../../../components/Modals/SuccessModal'

const CreateNewPasswordView = ({
    createPassModal,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    handleSuccess
}) => {

    return (
        <View style={styles.newPassContainer}>
            <InputField
                placeholder={'New Password'}
                secureTextEntry={true}
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
            />
            <InputField
                placeholder={'Confirm Password'}
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
            />

            <SuccessModal
                modalVisible={createPassModal}
                heading={'Congratulations!'}
                description={'You account has been successfully created.'}
                buttonText={'Continue'}
                onPress={handleSuccess}
            />
        </View>

    )
}

export default CreateNewPasswordView