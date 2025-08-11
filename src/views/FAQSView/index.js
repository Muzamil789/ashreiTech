import React from 'react'
import Container from '../../components/Container'
import TopView from '../../components/TopView'
import FontBold from '../../components/Typography/FontBold'
import { styles } from './styles'
import FontRegular from '../../components/Typography/FontRegular'
import { Image, TouchableOpacity, View } from 'react-native'
import { icons } from '../../assets'
import { COLORS } from '../../assets/theme/colors'

const FAQSView = ({ goBack, handleShowFaq, faqData, selectedIndex }) => {
    return (
        <Container>
            <TopView tittle={'Frequently Asked Questions'} onPress={goBack} />

            <Container>
                <FontBold name={'DevOps Training'} style={styles.mainHeading} />

                <View style={styles.faqLayout}>
                    {faqData?.map((faq, index) => {
                        const isSelected = selectedIndex === index;
                        return (
                            <View style={[styles.faqBox, { backgroundColor: isSelected ? COLORS.faqBackground : COLORS.faqOnSelect }]} key={index}>
                                <FontRegular
                                    style={styles.faqDiscription}
                                    numberOfLines={isSelected ? 10 : 2}
                                    name={faq.faq}
                                />
                                <TouchableOpacity onPress={() => handleShowFaq(index)} style={styles.arrowTouchable}>
                                    <Image source={isSelected ? icons.faqUpArrow : icons.faqDownArrow} style={styles.faqArrow} />
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            </Container>
        </Container>
    )
}

export default FAQSView