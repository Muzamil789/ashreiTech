import { View, Text } from 'react-native'
import React from 'react'
import ContactView from '../../views/ContactView'
import useContactViewModel from '../../useviewmodels/useContactViewModel'

const Contact = () => {
    const { states, functions } = useContactViewModel()
    const { goBack } = functions;
    const { contactMenuItems } = states;
    return (
        <ContactView goBack={goBack} contactMenuItems={contactMenuItems} />
    )
}

export default Contact