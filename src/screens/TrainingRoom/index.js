import { View, Text } from 'react-native'
import React from 'react'
import TrainingRoomView from '../../views/TrainingRoomView'
import useTrainingRoomViewModel from '../../useviewmodels/useTrainingRoomViewModel'

const TrainingRoom = () => {
    const { states, functions } = useTrainingRoomViewModel();
    const {
        RoomData,
        TrainingRoomCards
    } = states;
    const {
        goBack
    } = functions;
    return (
        <TrainingRoomView RoomData={RoomData} TrainingRoomCards={TrainingRoomCards} goBack={goBack} />
    )
}

export default TrainingRoom