import React from 'react'
import ProductPageView from '../../views/ProductPageView'
import useProductPageViewModel from '../../useviewmodels/useProductPageViewModel'

const ProductPage = ({ route }) => {
    const { _item } = route.params
    const { states, functions } = useProductPageViewModel()
    const {
        days,
        time,
        selectedDay,
        selectedTime,
        enrollModalVisible,
        readMore,
        skills,
        selectedCheckBox,
        showMoreSkills,
        companyImages,
        showAccordion
    } = states;
    const {
        handleDay,
        handleTime,
        handleEnrollCourse,
        handleEnrollContinue,
        handleReadMore,
        handleCheckbox,
        handleMoreSkills,
        handleShowAccordion,
        handleAddToCart
    } = functions;
    return (
        <ProductPageView
            days={days}
            time={time}
            selectedDay={selectedDay}
            handleDay={handleDay}
            handleTime={handleTime}
            selectedTime={selectedTime}
            handleEnrollCourse={handleEnrollCourse}
            enrollModalVisible={enrollModalVisible}
            handleEnrollContinue={handleEnrollContinue}
            handleReadMore={handleReadMore}
            readMore={readMore}
            handleCheckbox={handleCheckbox}
            skills={skills}
            selectedCheckBox={selectedCheckBox}
            handleMoreSkills={handleMoreSkills}
            showMoreSkills={showMoreSkills}
            companyImages={companyImages}
            showAccordion={showAccordion}
            handleShowAccordion={handleShowAccordion}
            _item={_item}
            handleAddToCart={handleAddToCart}
        />
    )
}

export default ProductPage