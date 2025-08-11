import React from 'react'
import ForgotPasswordView from '../../views/ForgotPasswordView'
import useForgotPasswordViewModel from '../../useviewmodels/useForgotPasswordViewModel'

const ForgotPassword = () => {
    const { states, functions } = useForgotPasswordViewModel();
    const {
        step,
        email,
        error,
        createPassModal,
        newPassword,
        confirmPassword
    } = states;
    const {
        handleNext,
        handleBack,
        setEmail,
        setOtp,
        setNewPassword,
        setConfirmPassword,
        handleSuccess
    } = functions;

    return (
        <ForgotPasswordView
            step={step}
            handleNext={handleNext}
            handleBack={handleBack}
            email={email}
            error={error}
            setEmail={setEmail}
            setOtp={setOtp}
            createPassModal={createPassModal}
            newPassword={newPassword}
            confirmPassword={confirmPassword}
            setNewPassword={setNewPassword}
            setConfirmPassword={setConfirmPassword}
            handleSuccess={handleSuccess}
        />
    )
}

export default ForgotPassword