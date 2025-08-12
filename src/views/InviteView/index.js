import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import TopView from '../../components/TopView'
import { styles } from './styles'
import { icons, images } from '../../assets'
import FontBold from '../../components/Typography/FontBold'
import FontSemiBold from '../../components/Typography/FontSemiBold'
import { InputAccessoryView } from 'react-native/types_generated/index'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { COLORS } from '../../assets/theme/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const InviteView = ({ goBack, howItWorks }) => {
    return (
        <Container>
            <TopView onPress={goBack} tittle={'Invite'} />

            <KeyboardAwareScrollView>
                <View style={styles.bodyContainer}>
                    <View style={styles.infoContainer}>
                        <Image source={images.invite} style={styles.inviteImage} />
                        <FontBold name={'Help them build new skills'} style={styles.title} />
                        <FontSemiBold name={'Share the opportunity to learn and grow. Invite your friends or team members to explore new skills and courses.'} style={styles.description} />
                    </View>
                    <View style={styles.inviteContainer}>
                        <FontBold name={'Invite your friend'} style={styles.inviteLabel} />
                        <View style={styles.emailContainer}>
                            <InputField style={styles.emailInput} placeholder={'Add employee email'} placeholderTextColor={'#C9C9C9'} />
                            <Button name={'Invite'} containerStyle={styles.inviteButton} textStyle={styles.inviteButtonText} />
                        </View>
                        <View style={styles.socialButtonsContainer}>
                            <TouchableOpacity style={styles.socialButtonBox}>
                                <Image source={icons.whatsApp} style={styles.socialImage} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.socialButtonBox}>
                                <Image source={icons.email} style={styles.socialImage} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.socialButtonBox}>
                                <Image source={icons.share} style={styles.socialImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.howItWorksContainer}>
                        <FontBold name={'How  it works?'} style={styles.howItWorksTitle} />


                        {howItWorks?.map((item, index) => (
                            <View style={styles.howItWorksStep} key={index}>
                                <View style={styles.stepCircle}></View>
                                <FontBold name={item.title} style={styles.stepText} />
                            </View>
                        ))}
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </Container>
    )
}

export default InviteView