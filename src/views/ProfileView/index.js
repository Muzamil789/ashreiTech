import {
    View,
    Image,
    TouchableOpacity,

} from 'react-native'
import React from 'react'
import FontBold from '../../components/Typography/FontBold'
import TopView from '../../components/TopView'
import { styles } from './styles'
import Container from '../../components/Container'
import { images, profileIcons } from '../../assets'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FontRegular from '../../components/Typography/FontRegular'
import FontSemiBold from '../../components/Typography/FontSemiBold'

const ProfileView = ({ goBack }) => {

    return (
        <Container style={styles.container}>
            <TopView tittle={'Profile'} onPress={goBack} />

            <KeyboardAwareScrollView>
                <View style={styles.userRow}>
                    <View style={styles.userImageBox}>
                        <Image source={images.userProfile} style={styles.userImage} />
                    </View>
                    <View style={styles.profileEditRow}>
                        <View style={styles.userInfocontainer}>
                            <FontBold name={'Raheem Iqbal'} style={styles.userName} />
                            <FontBold name={'raheemiqbal@tech.com'} style={styles.userEmail} numberOfLines={1} />
                        </View>
                        <TouchableOpacity>
                            <Image source={profileIcons.profileEditIcon} style={styles.editPencil} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.fieldsContainer}>
                    <InputField placeholder={'Name'} leftIconPath={profileIcons.profileNameIcon} />
                    <InputField placeholder={'Email'} leftIconPath={profileIcons.profileEmailIcon} />
                    <InputField placeholder={'Phone'} leftIconPath={profileIcons.profilePhoneIcon} />
                    <InputField placeholder={'Password'} leftIconPath={profileIcons.profilePasswordIcon} />
                    <InputField placeholder={'Confirm Password'} leftIconPath={profileIcons.profilePasswordIcon} />
                    <InputField placeholder={'Address'} leftIconPath={profileIcons.profileAddressIcon} />

                    <Button name={'Update Profile'}
                        leftIcon={profileIcons.profileUpdateBtnIcon}
                        containerStyle={styles.btnContainer} textStyle={styles.btnText}
                    />

                    <View style={styles.rateContainer}>
                        <TouchableOpacity>
                            <Image source={profileIcons.profileRateIcon} style={styles.rateIcon} />
                        </TouchableOpacity>
                        <FontSemiBold name={'Rate App'} style={styles.rateApp} />
                    </View>

                    <TouchableOpacity style={styles.rateContainer}>
                        <Image source={profileIcons.profileShareIcon} style={styles.rateIcon} />
                        <FontSemiBold name={'Share with friends'} />
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </Container>
    )
}

export default ProfileView