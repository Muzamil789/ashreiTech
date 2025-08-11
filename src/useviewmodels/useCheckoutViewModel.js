import { useNavigation } from "@react-navigation/native"
import { images } from "../assets"
import { useState } from "react";

const useCheckoutViewModel = () => {
    const navigation = useNavigation();
    const [checkoutModal, setCheckoutModal] = useState(false)
    const Courses = [
        {
            id: 1,
            heading: 'Microsoft',
            courseName: 'Machine Learning',
            price: 'PKR, 15,900.00 ',
            image: images.PressRoom,
        },
        {
            id: 2,
            heading: 'Micr(BOT)osoft',
            courseName: 'Built Operate Transfer',
            price: 'PKR, 15,900.00 ',
            image: images.boardRoom,

        },
        {
            id: 3,
            heading: '(MVP)',
            courseName: 'Minimum Viable Product',
            price: 'PKR, 15,900.00 ',
            image: images.meetingsRoom,
        },
    ]

    const goBack = () => {
        navigation.goBack();
    }

    const handleCheckout = () => {
        setCheckoutModal(true)
    }
    const handleCloseCheckoutModal = () => {

        setCheckoutModal(false)
    }
    return {
        states: {
            Courses,
            checkoutModal
        },
        functions: {
            goBack,
            handleCheckout,
            handleCloseCheckoutModal
        },
    }
}

export default useCheckoutViewModel