import React from 'react'
import AddToCartView from '../../views/AddToCartView'
import useAddToCartViewModel from '../../useviewmodels/useAddToCartViewModel'

const AddToCart = () => {
    const { states, functions } = useAddToCartViewModel();
    const { CartItems } = states;
    const { goBack, handleApplyFinancial, handleCheckout } = functions;
    return (
        <AddToCartView
            CartItems={CartItems}
            goBack={goBack}
            handleApplyFinancial={handleApplyFinancial}
            handleCheckout={handleCheckout}
        />
    )
}

export default AddToCart