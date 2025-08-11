import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { launchImageLibrary } from "react-native-image-picker";

const useSignupViewModel = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');
    const [error, setError] = useState();
    const [successModal, setSuccessModal] = useState(false)
    const [imageUri, setImageUri] = useState(null);


    const handleBAck = () => {
        navigation.goBack()
    }

    const handleSignup = () => {
        if (!name && !email && !phone && !id) {
            setError('Fill Data')
            return
        } else {
            navigation.navigate('ForgorPassword', { fromSignup: true, });
        }
    }

    const handleSuccessModal = () => {
        console.log('handleSuccessModal')
    }

    const openGallery = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 0.5,
            },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorMessage) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                } else {
                    const uri = response.assets[0].uri;
                    setImageUri(uri);
                }
            }
        );
    };

    return {
        states: {
            name,
            email,
            phone,
            id,
            error,
            successModal,
            imageUri
        },
        functions: {
            handleBAck,
            handleSignup,
            setName,
            setEmail,
            setPhone,
            setId,
            handleSuccessModal,
            openGallery
        }
    }
}

export default useSignupViewModel