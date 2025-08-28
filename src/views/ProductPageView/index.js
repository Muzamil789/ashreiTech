import { View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import { icons, images, tabIcons } from '../../assets'
import { styles } from './styles'
import { COLORS } from '../../assets/theme/colors'
import FontBold from '../../components/Typography/FontBold'
import FontRegular from '../../components/Typography/FontRegular'
import Button from '../../components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SuccessModal from '../../components/Modals/SuccessModal'
import CheckBox from '../../components/CheckBox'

const ProductPageView = ({
    days,
    time,
    selectedDay,
    handleDay,
    handleTime,
    selectedTime,
    handleEnrollCourse,
    enrollModalVisible,
    handleEnrollContinue,
    handleReadMore,
    readMore,
    handleCheckbox,
    skills,
    selectedCheckBox,
    handleMoreSkills,
    showMoreSkills,
    companyImages,
    showAccordion,
    handleShowAccordion,
    _item,
    handleAddToCart,
}) => {

    console.log(_item, '_item _item _item')

    const fullDescription =
        'In this Built Operate Transfer (BOT) Model course you will learners with a complete understanding of data analytics tools & techniques. Getting started with this course can help you gain knowledge on data analysis, visualization, NumPy, SciPy, web scraping, and natural language processing. With this course it an ideal Kickstarter for anyone looking to become a data scientist. In this Built Operate Transfer (BOT) Model course you will learners with a complete understanding of data analytics tools & techniques. Getting started with this course can help you gain knowledge on data analysis, visualization, NumPy, SciPy, web scraping, and natural language processing. With this course it an ideal Kickstarter for anyone looking to become a data scientist.';

    const sentences = fullDescription.split('.');


    const shortDescription = sentences.slice(0, 1).join('.') + '.';



    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, position: 'relative' }}>
            <Header />
            <KeyboardAwareScrollView>
                <Image source={images.productImage} style={styles.bannerImage} />
                <Container style={styles.containerStyle}>
                    <View style={styles.headerContainer}>
                        <FontBold name={_item.courseTitle} style={styles.title} />
                        <View style={styles.actionContainer}>
                            <TouchableOpacity>
                                <Image source={tabIcons.tabWishlist} style={styles.wishlistImage} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={icons.menu} style={styles.wishlistImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <FontRegular name={_item.courseDescription} style={styles.description} />
                    </View>
                    <View style={styles.instructorRow}>
                        <FontRegular name={'Instructor: '} />
                        <FontBold name={_item.instructor} style={styles.instructorName} />
                    </View>
                    <View style={styles.ratingContainer}>
                        <FontBold name={"Rating: "} style={styles.rating} />
                        <FontBold name={'4.3'} style={styles.rating} />
                    </View>

                    <View>
                        <FontRegular name={`Total Students: ${'600'}`} style={styles.totalStudents} />
                    </View>
                    <View style={styles.slotContainer}>
                        <FontRegular name={'Available Slot'} style={styles.availableSlot} />

                        <View style={styles.daysContainer}>
                            {days?.map((day, index) => (
                                <TouchableOpacity
                                    style={[styles.dayButton, selectedDay === day.day && styles.selectedButton]}
                                    key={index}
                                    onPress={() => handleDay(day.day)}
                                >
                                    <FontBold style={[styles.dayText, selectedDay === day.day && styles.selectedButtonText]} name={day.day} />
                                </TouchableOpacity>
                            ))}
                        </View>

                        <View style={styles.timeContainer}>
                            {time?.map((time, index) => (
                                <TouchableOpacity
                                    style={[styles.dayButton, selectedTime === time.time && styles.selectedButton]}
                                    key={index}
                                    onPress={() => handleTime(time.time)}
                                >
                                    <FontBold style={[styles.timeText, selectedTime === time.time && styles.selectedButtonText]} name={time.time} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View style={styles.learnSectionWrapper}>
                        <FontBold name={'What Will You Learn?'} style={styles.learnTitle} />

                        <FontRegular name={readMore ? fullDescription : shortDescription} style={styles.learnDescription} />

                        <TouchableOpacity style={styles.readMoreContainer} onPress={handleReadMore}>
                            <FontBold name={readMore ? 'show Less' : 'Read More'} style={styles.readMoreTittle} />
                            <Image source={readMore ? icons.faqUpArrow : icons.faqDownArrow} style={styles.readMoreArrow} />
                        </TouchableOpacity>
                    </View>



                    <View style={styles.skillsSectionContainer}>
                        <FontBold name={'Skill you will gain'} style={styles.skillsSectionTitle} />

                        <View style={styles.skillsListContainer}>
                            {(showMoreSkills ? skills : skills.slice(0, 3))?.map((skill, index) => {
                                return (
                                    <CheckBox
                                        description={skill.skill}
                                        isChecked={selectedCheckBox.includes(index)}
                                        onPressCheckBox={() => handleCheckbox(index)}
                                        key={skill.id}
                                    />
                                )
                            })}
                        </View>

                        <TouchableOpacity style={styles.readMoreContainer} onPress={handleMoreSkills}>
                            <FontBold name={showMoreSkills ? 'Show Less' : 'Show More'} style={styles.readMoreTittle} />
                            <Image source={showMoreSkills ? icons.faqUpArrow : icons.faqDownArrow} style={styles.readMoreArrow} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.becomeContainer}>
                        <FontBold name={'What you can become'} style={styles.becomeTitle} />
                        <TouchableOpacity style={styles.accordionContainer} onPress={handleShowAccordion}>
                            <View style={styles.accordionHeader}>
                                <FontBold name={'Data Analyst'} style={styles.accordionTitle} />
                                <Image source={showAccordion ? icons.faqUpArrow : icons.faqDownArrow} style={styles.readMoreArrow} />
                            </View>

                            {showAccordion && (
                                <View>
                                    <View style={styles.salaryContainer}>
                                        <FontBold name={'Average Salary'} style={styles.salaryTitle} />
                                        <FontBold name={'$43K - $95K Per Annum'} style={styles.salaryText} />
                                    </View>
                                    <View style={styles.divider}></View>
                                    <View style={styles.salaryContainer}>
                                        <FontBold name={'Hiring Companies'} style={styles.salaryTitle} />

                                        <View style={styles.companyImageContainer}>
                                            {companyImages?.map((image) => (
                                                <Image source={image.image} style={styles.companyImage} key={image.id} />
                                            ))}
                                        </View>
                                    </View>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>
                </Container>
            </KeyboardAwareScrollView>

            <View style={styles.buttonContainer}>
                <Button
                    name={'Enroll Course'}
                    containerStyle={styles.enrollButton}
                    textStyle={styles.enrollButtonText}
                    onPress={handleEnrollCourse}
                />
                <Button name={'Add to cart'} onPress={handleAddToCart} />
            </View>

            <SuccessModal
                heading={'Your query has been submitted Successfully!'}
                description={'Our team will contact you shortly.'}
                modalVisible={enrollModalVisible}
                onPress={handleEnrollContinue}
            />
        </View>
    )
}

export default ProductPageView