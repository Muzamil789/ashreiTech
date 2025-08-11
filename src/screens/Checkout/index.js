import React from 'react'
import CheckoutView from '../../views/CheckoutView'
import useCheckoutViewModel from '../../useviewmodels/useCheckoutViewModel'

const Checkout = () => {
    const { states, functions } = useCheckoutViewModel();
    const { Courses, checkoutModal } = states;
    const { goBack, handleCheckout, handleCloseCheckoutModal } = functions;
    return (
        <CheckoutView Courses={Courses} goBack={goBack} checkoutModal={checkoutModal} handleCheckout={handleCheckout} handleCloseCheckoutModal={handleCloseCheckoutModal} />
    )
}

export default Checkout