import { View, Image, FlatList } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import { styles } from './styles'
import FontBold from '../../components/Typography/FontBold'
import FontSemiBold from '../../components/Typography/FontSemiBold'
import Button from '../../components/Button'

const CourseCategoriesView = ({ coursesCategories, handleDetail, course }) => {

    console.log(course.courses, 'course course course')
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.courseContainer}>
                <View style={styles.courseImageContainer}>
                    <Image source={item.image} style={styles.CourseImage} />
                </View>
                <View style={styles.infoContainer}>
                    <FontBold name={item.courseTitle} style={styles.courseTitle} numberOfLines={2} />
                    <FontSemiBold name={item.courseDescription} numberOfLines={2} style={styles.courseDescription} />
                    <View style={styles.coursePriceRow}>
                        <FontBold name={`PKR ${item.coursePrice}`} style={styles.coursePrice} />
                        <Button name={'View Details'} containerStyle={styles.detailButton} textStyle={styles.detailButtonText} onPress={() => handleDetail(index)} />
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <Header />

            <Container style={styles.bodyContainer}>

                <FlatList
                    data={course.courses}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={
                        <FontSemiBold name={'No courses available'} style={{ textAlign: 'center', marginTop: 20 }} />
                    }
                    contentContainerStyle={styles.FlatListContainer}
                />
            </Container>
        </View>
    )
}

export default CourseCategoriesView