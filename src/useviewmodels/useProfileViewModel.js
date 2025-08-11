import { useNavigation } from '@react-navigation/native'

const useProfileViewModel = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return {
        states: {

        },
        functions: {
            goBack
        }
    }
}

export default useProfileViewModel