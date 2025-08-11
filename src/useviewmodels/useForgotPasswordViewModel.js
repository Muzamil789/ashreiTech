import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';



const useForgotPasswordViewModel = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [otp, setOtp] = useState();
    const [createPassModal, setCreatePassModal] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const route = useRoute()
    const navigation = useNavigation();


    console.log(route.params, 'route route')

    useEffect(() => {
        if (route.params?.fromSignup) {
            setStep(2);
        }
    }, [route.params]);


    const handleNext = () => {
        if (step === 1) {
            if (!email) {
                setError('Email is required');
                return;
            }
            setStep(2);
            setError('');
            setEmail('')
            return;
        }

        if (step === 2) {
            if (otp.length !== 4) {
                return
            }
            if (otp.length == 4) {
                setStep(3)
                setOtp('')
                return
            }
        }

        if (step === 3) {
            if (!newPassword || !confirmPassword) {
                return
            }
            if (newPassword === confirmPassword) {
                setCreatePassModal(true)
                setNewPassword('')
                setConfirmPassword('')
                return
            }

        }
    }

    const handleBack = () => {
        if (step === 1) {
            navigation.goBack()
            return
        }
        if (step > 1) {
            setStep(step - 1)
        }
    }
    // 
    const handleSuccess = () => {
        navigation.navigate('Login')
        setCreatePassModal(false)
    }

    return {
        states: {
            step,
            email,
            error,
            createPassModal,
            newPassword,
            confirmPassword
        },
        functions: {
            handleNext,
            handleBack,
            setEmail,
            setOtp,
            setNewPassword,
            setConfirmPassword,
            handleSuccess
        }
    }

}

export default useForgotPasswordViewModel