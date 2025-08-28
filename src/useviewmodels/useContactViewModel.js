import { useNavigation } from "@react-navigation/native"

const useContactViewModel = () => {
    const navigation = useNavigation()

    const contactMenuItems = [
        { id: 1, title: 'Submit Query' },
        { id: 2, title: 'Support' },
        { id: 3, title: 'About Ashrei Tech' },
        { id: 4, title: 'Privacy Policy' },
        { id: 5, title: 'Terms and Conditions' },
    ];

    const goBack = () => {
        navigation.goBack()
    }


    return {
        states: {
            contactMenuItems
        },
        functions: {
            goBack
        }
    }
}

export default useContactViewModel