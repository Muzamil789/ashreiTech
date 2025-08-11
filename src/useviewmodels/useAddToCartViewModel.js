import { useNavigation } from "@react-navigation/native"
import { images } from "../assets"

const useAddToCartViewModel = () => {
    const navigation = useNavigation();

    const CartItems = [
        {
            id: 1,
            image: images.boardRoom,
            courseHeading: 'Microsoft Azure Machine Learning',
            finalPrice: '15900.00',
            fullPrice: ' Rs 19,900.00',
            percentOff: '20% off - 3 day left at this price!',
        },
        {
            id: 2,
            image: images.PressRoom,
            courseHeading: 'Built Operate Transfer (BOT)',
            finalPrice: '15900.00',
            fullPrice: ' Rs 19,900.00',
            percentOff: '20% off - 3 day left at this price!',
        },
        {
            id: 3,
            image: images.conferenceRoom,
            courseHeading: 'Minimum Viable Product (MVP)',
            finalPrice: '15900.00',
            fullPrice: ' Rs 19,900.00',
            percentOff: '20% off - 3 day left at this price!',
        },
    ]

    const goBack = () => {
        navigation.goBack();
    }
    const handleApplyFinancial = () => {
        navigation.navigate('Scholarship')
    }

    const handleCheckout = () => {
        navigation.navigate('Checkout')
    }
    return {
        states: {
            CartItems
        },
        functions: {
            goBack,
            handleApplyFinancial,
            handleCheckout
        },
    }
}

export default useAddToCartViewModel