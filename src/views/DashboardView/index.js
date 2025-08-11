import { View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import FontBold from '../../components/Typography/FontBold'

const DashboardView = () => {
    return (
        <View>
            <Header />

            <FontBold name={'Dahboard'} />
        </View>
    )
}

export default DashboardView