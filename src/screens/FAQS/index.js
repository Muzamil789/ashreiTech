import React from 'react'
import FAQSView from '../../views/FAQSView'
import useFAQSViewModel from '../../useviewmodels/useFAQSViewModel'

const FAQS = () => {
    const { states, functions } = useFAQSViewModel();
    const { goBack, handleShowFaq } = functions;
    const { showFaq, faqData, selectedIndex } = states;
    return (
        <FAQSView
            selectedIndex={selectedIndex}
            goBack={goBack}
            showFaq={showFaq}
            handleShowFaq={handleShowFaq}
            faqData={faqData} />
    )
}

export default FAQS