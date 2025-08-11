import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import TopView from '../../../components/TopView'
import { icons, images } from '../../../assets'
import { styles } from './styles'
import InputField from '../../../components/InputField'
import Button from '../../../components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SuccessModal from '../../../components/Modals/SuccessModal'

const SignupView = ({
    handleBAck,
    handleSignup,
    name,
    email,
    phone,
    id,
    setName,
    setEmail,
    setPhone,
    setId,
    error,
    successModal,
    handleSuccessModal,
    openGallery,
    imageUri
}) => {
    return (
        <Container>
            <TopView tittle={'Create an account'} onPress={handleBAck} />

            <KeyboardAwareScrollView>

                <View style={styles.imageContainer}>
                    <Image
                        // source={images.SignupFrame}
                        source={imageUri ? { uri: imageUri } : images.SignupFrame}
                        style={styles.image}

                    />

                    <TouchableOpacity style={styles.cameraTouchable} onPress={openGallery}>
                        <Image source={icons.camera} style={styles.cameraImage} />
                    </TouchableOpacity>
                </View>

                <View style={styles.InputContainer}>
                    <InputField
                        placeholder={'Name'}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        error={error}
                    />
                    <InputField
                        placeholder={'Email'}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        error={error}
                    />
                    <InputField
                        placeholder={'Phone Number'}
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                        error={error}
                    />
                    <InputField
                        placeholder={'ID Number (CNIC/B-Form)'}
                        value={id}
                        onChangeText={(text) => setId(text)}
                        error={error}
                    />
                    <Button name={'Signup'} onPress={handleSignup} />
                </View>
            </KeyboardAwareScrollView>

            <SuccessModal modalVisible={successModal} heading={'Congratulation!'} description={'You account has been successfully created.'} onPress={handleSuccessModal} />
        </Container>
    )
}

export default SignupView