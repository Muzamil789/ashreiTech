import { View, Text } from 'react-native'
import React from 'react'
import TrainingRoomView from '../../views/TrainingRoomView'
import useTrainingRoomViewModel from '../../useviewmodels/useTrainingRoomViewModel'

const TrainingRoom = () => {
    const { states, functions } = useTrainingRoomViewModel();
    const {
        RoomData
    } = states;
    const {

    } = functions;
    return (
        <TrainingRoomView RoomData={RoomData} />
    )
}

export default TrainingRoom