import { View, Text, Image } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import TopView from '../../components/TopView'
import { images } from '../../assets'
import FontBold from '../../components/Typography/FontBold'
import { styles } from './styles'
import InputField from '../../components/InputField'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Button from '../../components/Button'
import SuccessModal from '../../components/Modals/SuccessModal'

const ScholarshipView = ({
    goBack,
    handleUploadDegree,
    files,
    applyScholarship,
    showModal,
    handleSuccessModal
}) => {
    return (
        <Container>
            <TopView onPress={goBack} />

            <KeyboardAwareScrollView>

                <View style={styles.topContainer}>
                    <Image source={images.scholarship} style={styles.scholarshipImage} />
                    <FontBold name={'Apply for Scholarship'} style={styles.applyFor} />
                    <Text style={styles.wantTo}>Want to apply for <Text style={styles.scholarship}>scholarship</Text>, fill the form below</Text>
                </View>

                <View style={styles.fieldsContainer}>
                    <InputField
                        editable={false}
                        placeholder={'Upload Degree or Transcript *'}
                        uploadIcon={true}
                        handleUploadDocument={() => handleUploadDegree('degree')}
                        value={files.degree?.[0]?.name || ""}
                    />

                    <InputField
                        editable={false}
                        placeholder={'Upload Resume/Cv *'}
                        uploadIcon={true}
                        handleUploadDocument={() => handleUploadDegree('cv')}
                        value={files.cv?.[0]?.name || ""}
                    />

                    <InputField
                        editable={false}
                        placeholder={'Upload Electricity Bill *'}
                        uploadIcon={true}
                        handleUploadDocument={() => handleUploadDegree('bill')}
                        value={files.bill?.[0]?.name || ""}
                    />

                    <InputField
                        placeholder={'Current Employee'}
                    />

                    <InputField
                        placeholder={'Statement'}
                        style={styles.statement}
                        multiline
                    />

                    <Button name={'Apply for Scholarship'} onPress={applyScholarship} />
                </View>
            </KeyboardAwareScrollView>

            <SuccessModal
                modalVisible={showModal}
                heading={'You’ve Applied Successfully!'}
                description={'Our team will share the details on your email shortly.'}
                buttonText={'Done'}
                onPress={handleSuccessModal}
            />
        </Container>
    )
}

export default ScholarshipView