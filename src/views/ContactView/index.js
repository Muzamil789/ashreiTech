import React from 'react'
import Container from '../../components/Container'
import TopView from '../../components/TopView'
import FontBold from '../../components/Typography/FontBold'

const ContactView = ({ goBack }) => {
    return (
        <Container>
            <TopView tittle={'Contact'} onPress={goBack} />

            <FontBold name={'Contact'} />
        </Container>
    )
}

export default ContactView