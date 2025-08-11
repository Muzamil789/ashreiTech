import { useNavigation } from "@react-navigation/native"
import { useState } from "react";
import { pick } from '@react-native-documents/picker';



const useScholarshipViewModel = () => {
    // const [degree, setDegree] = useState(null);

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
        // navigation.goBack()
    }

    console.log(files.degree, 'files files')

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

    }


    return {
        states: {
            files
        },
        functions: {
            goBack,
            handleUploadDegree,
            applyScholarship
        }
    }
}

export default useScholarshipViewModel