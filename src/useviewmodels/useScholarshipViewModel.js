import { useNavigation } from "@react-navigation/native"
import { useState } from "react";
import { pick } from '@react-native-documents/picker';



const useScholarshipViewModel = () => {
    const [showModal, setShowModal] = useState(false);
    const [files, setFiles] = useState({
        degree: {

        },
        cv: {

        },
        bill: {

        }
    })


    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack()
    }

    const handleUploadDegree = async (fieldName) => {
        try {
            const result = await pick({
                type: ['application/pdf', 'application/msword'],
                allowMultiSelection: false,
            });
            setFiles(prev => ({
                ...prev,
                [fieldName]: result
            }));

        } catch (error) {
            console.warn(error);
        }
    };


    const applyScholarship = () => {
        setShowModal(true)
    }

    const handleSuccessModal = () => {
        navigation.navigate('Dashboard')
        setShowModal(false)
    }

    return {
        states: {
            files,
            showModal
        },
        functions: {
            goBack,
            handleUploadDegree,
            applyScholarship,
            handleSuccessModal
        }
    }
}

export default useScholarshipViewModel