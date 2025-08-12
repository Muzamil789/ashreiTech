import { useNavigation } from "@react-navigation/native"
import { images } from "../assets"



const RoomData = [
    {
        id: 1,
        image: images.conferenceRoom,
    },
    {
        id: 2,
        image: images.meetingsRoom,
    },
    {
        id: 3,
        image: images.boardRoom,
    },
    {
        id: 4,
        image: images.conferenceRoom,
    },
]

const TrainingRoomCards = [
    {
        id: 1,
        roomName: 'AL RAZI',
        location: 'NASTP',
        roomSize: '280 Sq Ft',
        Persons: '13 Person',
        Responds: 'Responds in 1 hr (s)'
    },
    {
        id: 2,
        roomName: 'OMER KHAYYAM',
        location: 'NASTP',
        roomSize: '280 Sq Ft',
        Persons: '12 Person',
        Responds: 'Responds in 48 hr (s)'
    },
    {
        id: 3,
        roomName: 'IBN AL HAYTHAM',
        location: 'NASTP',
        roomSize: '280 Sq Ft',
        Persons: '16 Person',
        Responds: 'Responds in 1 hr (s)'
    },
    {
        id: 4,
        roomName: 'IBN ZUHR',
        location: 'NASTP',
        roomSize: '280 Sq Ft',
        Persons: '16 Person',
        Responds: 'Responds in 1 hr (s)'
    },
    {
        id: 5,
        roomName: 'JABIR IBN HAYYAM',
        location: 'NASTP',
        roomSize: '280 Sq Ft',
        Persons: '12 Person',
        Responds: 'Responds in 1 hr (s)'
    },
]

const useTrainingRoomViewModel = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }
    return {
        states: {
            RoomData,
            TrainingRoomCards
        },
        functions: {
            goBack
        },
    }
}

export default useTrainingRoomViewModel