import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const useNotificationViewModel = () => {
    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }
    return {
        states: {

        },
        functions: {
            goBack,
        }
    }
}

export default useNotificationViewModel