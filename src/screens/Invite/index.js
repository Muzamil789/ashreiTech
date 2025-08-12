import { View, Text } from 'react-native'
import React from 'react'
import InviteView from '../../views/InviteView'
import useInviteViewModel from '../../useviewmodels/useInviteViewModel'

const Invite = () => {
    const { states, functions } = useInviteViewModel();
    const { howItWorks } = states;
    const { goBack } = functions;
    return (
        <InviteView goBack={goBack} howItWorks={howItWorks} />
    )
}

export default Invite