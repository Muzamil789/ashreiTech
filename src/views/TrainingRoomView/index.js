import { View, FlatList, Image } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import TopView from '../../components/TopView'
import { images } from '../../assets'
import { styles } from './styles'
import TrainingRoomCard from './components/TrainingRoomCard'
import { vh, vw } from '../../assets/theme/dimention';

const TrainingRoomView = ({ RoomData, TrainingRoomCards, goBack }) => {

    const renderItem = ({ item }) => {
        return (
            <Image source={item.image} style={styles.roomImage} />
        )
    }
    return (
        <Container style={styles.container}>
            <TopView tittle={'Training Room'} onPress={goBack} />

            <View>
                <FlatList
                    ListHeaderComponent={
                        <FlatList
                            data={RoomData}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal
                            contentContainerStyle={styles.roomsContainer}
                            showsHorizontalScrollIndicator={false}
                        />
                    }

                    data={TrainingRoomCards}
                    renderItem={({ item }) => <TrainingRoomCard item={item} />}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: vh * 10 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </Container>
    )
}

export default TrainingRoomView