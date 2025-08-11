import { images } from "../assets"

const RoomData = [
    {
        id: 1,
        image: images.PressRoom,
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

const useTrainingRoomViewModel = () => {
    return {
        states: {
            RoomData
        },
        functions: {

        },
    }
}

export default useTrainingRoomViewModel