import React from 'react'
import Container from '../../components/Container'
import InputField from '../../components/InputField'
import FontBold from '../../components/Typography/FontBold'
import { Image, TouchableOpacity, View } from 'react-native'
import { icons } from '../../assets'
import { styles } from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SearchView = ({ handleBack, topSearches, handleTopSearches, courses }) => {

    return (
        <Container style={styles.bodyContainer}>
            <KeyboardAwareScrollView>

                <InputField searchIcon={true} placeholder={'Search'} style={styles.searchInput} placeholderTextColor={'#6A707C'} />

                <View style={styles.topSearchesContainer}>
                    <FontBold name={'Top Searches'} style={styles.topSearches} />
                    <TouchableOpacity onPress={handleBack}>
                        <Image source={icons.searchBackIcon} style={styles.searchBackImg} />
                    </TouchableOpacity>
                </View>

                <View style={styles.searchesContainer}>
                    {topSearches?.map((searches) => (
                        <TouchableOpacity onPress={() => handleTopSearches(searches.id)}>
                            <FontBold name={searches.name} style={styles.topSearchesText} />
                        </TouchableOpacity>
                    ))}
                </View>

                <FontBold name={'Browse categories'} style={styles.browseCategories} />

                {courses?.map((course) => (
                    <TouchableOpacity style={styles.courseNameRow} key={course.id}>
                        <FontBold name={course.name} style={styles.coursetitle} />
                        <Image source={icons.nextArrow} style={styles.nextArrow} />
                    </TouchableOpacity>
                ))}
            </KeyboardAwareScrollView>
        </Container>
    )
}

export default SearchView