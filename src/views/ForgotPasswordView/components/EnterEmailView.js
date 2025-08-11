import { View, Text } from 'react-native'
import React from 'react'
import InputField from '../../../components/InputField'
import FontRegular from '../../../components/Typography/FontRegular'
import { styles } from '../styles'

const EnterEmailView = ({ error, email, setEmail }) => {
    return (
        <View>
            <InputField
                placeholder={'Enter your email'}
                value={email}
                onChangeText={(text) => setEmail(text)}
                error={error}
            />
            {/* {error ? <FontRegular name={error} style={styles.errorText} /> : null} */}
        </View>
    )
}

export default EnterEmailView