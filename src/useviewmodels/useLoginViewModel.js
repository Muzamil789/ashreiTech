import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../redux/authSlice";
import { useNavigation } from "@react-navigation/native";

const useLoginViewModel = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user)
    const token = useSelector(state => state.auth.token)
    const navigation = useNavigation()

    const handleLogin = () => {
        dispatch(setCredentials({ user: '1', token: '1' }));
    }

    const handleForgotPassword = () => {
        navigation.navigate('ForgorPassword')
    }

    const handleSignUp = () => {
        navigation.navigate('SignupAs')
    }
    return {
        states: {

        },
        functions: {
            handleLogin,
            handleForgotPassword,
            handleSignUp
        }
    }
}

export default useLoginViewModel