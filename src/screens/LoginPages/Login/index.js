import React from 'react'
import LoginView from '../../../views/LoginPages/LoginView'
import useLoginViewModel from '../../../useviewmodels/useLoginViewModel'

const Login = () => {
    const { states, functions } = useLoginViewModel();
    const { handleLogin, handleForgotPassword, handleSignUp } = functions;
    return (
        <LoginView handleLogin={handleLogin} handleForgotPassword={handleForgotPassword} handleSignUp={handleSignUp} />
    )
}

export default Login