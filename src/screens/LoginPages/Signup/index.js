import { View, Text } from 'react-native'
import React from 'react'
import SignupView from '../../../views/LoginPages/SignupView'
import useSignupViewModel from '../../../useviewmodels/useSignupViewModel'

const Signup = () => {
    const { states, functions } = useSignupViewModel();
    const {
        handleBAck,
        handleSignup,
        setName,
        setEmail,
        setPhone,
        setId,
        handleSuccessModal,
        openGallery
    } = functions;
    const {
        name,
        email,
        phone,
        id,
        error,
        successModal,
        imageUri
    } = states;
    return (
        <SignupView
            handleBAck={handleBAck}
            handleSignup={handleSignup}
            name={name}
            email={email}
            phone={phone}
            id={id}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setId={setId}
            error={error}
            successModal={successModal}
            handleSuccessModal={handleSuccessModal}
            openGallery={openGallery}
            imageUri={imageUri}
        />
    )
}

export default Signup