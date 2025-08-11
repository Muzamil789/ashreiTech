import { View, FlatList, Image } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import TopView from '../../components/TopView'
import { images } from '../../assets'
import { styles } from './styles'
import FontBold from '../../components/Typography/FontBold'

const TrainingRoomView = ({ RoomData }) => {

    const renderItem = ({ item }) => {
        return (
            <Image source={item.image} style={styles.roomImage} />
        )
    }
    return (
        <Container>
            <TopView tittle={'Training Room'} />

            <FlatList
                data={RoomData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                contentContainerStyle={styles.roomsContainer}
            />

            <FontBold name={'ehjfasjkh'} />
        </Container>
    )
}

export default TrainingRoomView