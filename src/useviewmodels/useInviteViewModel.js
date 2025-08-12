import { useNavigation } from "@react-navigation/native"

const useInviteViewModel = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack()
    }

    const howItWorks = [
        {
            id: 1,
            title: 'Invite your friends'
        },
        {
            id: 2,
            title: 'Get friends to enroll in a course'
        },
        {
            id: 3,
            title: 'Your friend signup to enroll in a course'
        },
        {
            id: 4,
            title: 'He can enroll into as many courses as he likes'
        },
    ]
    return {
        states: {
            howItWorks
        },
        functions: {
            goBack
        },
    }
}

export default useInviteViewModel