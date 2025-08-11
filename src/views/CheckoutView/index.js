import { View, Text, Image } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import TopView from '../../components/TopView'
import { styles } from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FontSemiBold from '../../components/Typography/FontSemiBold'
import FontBold from '../../components/Typography/FontBold'
import Button from '../../components/Button'
import { images } from '../../assets'
import SuccessModal from '../../components/Modals/SuccessModal'

const CheckoutView = ({ handleApplyFinancial, handleCheckout, Courses, goBack, checkoutModal, handleCloseCheckoutModal }) => {
    console.log(Courses, 'Courses')
    return (
        <Container>
            <TopView tittle={'Checkout Details'} onPress={goBack} />
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>

                    <View style={styles.coursesContainer}>
                        {Courses?.map((course) => (
                            <View style={styles.singleCourseContainer} key={course.id}>
                                <View>
                                    <Image source={course.image} style={styles.coursesImge} />
                                </View>
                                <View style={styles.detailContainer}>
                                    <FontBold name={course.heading} style={styles.courseHeading} />
                                    <FontBold name={course.courseName} style={styles.courseName} />
                                    <FontBold name={course.price} style={styles.coursePrice} />
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={styles.userContainer}>
                        <FontBold name={`Name: ${'Raheem Iqbal'}`} style={styles.userName} />
                        <FontBold name={`Email: ${'raheemiqbal@tech.com'}`} style={styles.userName} />
                        <FontBold name={`Address: ${'Marine Point Block-9 Clifton, Karachi'}`} style={styles.userName} />
                    </View>

                    <View style={styles.bottomContainer}>
                        <View style={styles.totalRow}>
                            <FontSemiBold name={'TOTAL AMOUNT:'} style={styles.total} />
                            <FontBold name={'5667'} style={styles.totalAmount} />
                        </View>
                        <Button name={'Checkout'} onPress={handleCheckout} />
                        <Button name={'Apply for Financial Assistance'}
                            containerStyle={styles.applyButton}
                            textStyle={styles.applyButtonText}
                            onPress={handleApplyFinancial}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>

            <SuccessModal
                modalVisible={checkoutModal}
                heading={'Successful'}
                description={'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'}
                onPress={handleCloseCheckoutModal}
            />
        </Container>
    )
}

export default CheckoutView

