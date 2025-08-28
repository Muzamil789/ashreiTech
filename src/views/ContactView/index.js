import React from 'react'
import Container from '../../components/Container'
import TopView from '../../components/TopView'
import FontBold from '../../components/Typography/FontBold'
import { Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { icons } from '../../assets'

const ContactView = ({ goBack, contactMenuItems }) => {
    return (
        <Container>
            <TopView tittle={'Contact'} onPress={goBack} />

            <Container>
                {
                    contactMenuItems?.map((contactMenu) => (
                        <TouchableOpacity style={styles.courseNameRow} key={contactMenu.id}>
                            <FontBold name={contactMenu.title} style={styles.coursetitle} />
                            <Image source={icons.nextArrow} style={styles.nextArrow} />
                        </TouchableOpacity>
                    ))
                }
            </Container>
        </Container>
    )
}

export default ContactView