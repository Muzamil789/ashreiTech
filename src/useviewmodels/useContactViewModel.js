import { useNavigation } from "@react-navigation/native"

const useContactViewModel = () => {
    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }
    return {
        states: {

        },
        functions: {
            goBack
        }
    }
}

export default useContactViewModel