import { ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import CoursesCard from './components/CoursesCard'
import Container from '../../components/Container'
import { styles } from './styles'
import FontBold from '../../components/Typography/FontBold'
import { vh, vw } from '../../assets/theme/dimention'
import { images } from '../../assets'
import Button from '../../components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import OngoingCoursesCard from './components/OngoingCoursesCard'
import Footer from '../../screens/Footer'
import { useNavigation } from '@react-navigation/native'

const DashboardView = ({ CourseCategories, Courses }) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }} >
            <KeyboardAwareScrollView>
                <Header />

                <ImageBackground
                    source={images.dashboardBackground}
                    style={styles.backgroundImage}
                >
                    <View style={styles.seamlessContainer}>
                        <FontBold name={'Seamless \n Tech \n Education'} style={styles.seamlessTitle} />
                        <Button name={'Browse Now'} containerStyle={styles.browseButtonContainer} textStyle={styles.browseButtonText} />
                    </View>
                </ImageBackground>
                <Container style={styles.bodyContainer}>
                    <View style={styles.categoriesContainer}>
                        <View style={styles.headingRow}>
                            <FontBold name={'Courses Categories'} style={styles.categoryHeading} />
                            <TouchableOpacity>
                                <FontBold name={'View All'} style={styles.viewAll} />
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal={true} contentContainerStyle={{ gap: vw * 2 }}>
                            {
                                CourseCategories?.slice(0, 6).map((CourseCategorie) => (
                                    <TouchableOpacity style={styles.singleCourseCategory} key={CourseCategorie.id}>
                                        <FontBold name={CourseCategorie.courseName} style={styles.singleCourseTitle} />
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>
                    <View>
                        {
                            Courses?.map((course, index) => {
                                return (
                                    <View key={index}>
                                        <View style={styles.headingRow}>
                                            <FontBold name={course.courseCategory} style={styles.categoryHeading} />
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate('CourseCategories', { course })}
                                            >
                                                <FontBold name={'View All'} style={styles.viewAll} />
                                            </TouchableOpacity>
                                        </View>
                                        <ScrollView horizontal={true} contentContainerStyle={{ gap: vw * 3, paddingBottom: vh * 3 }}>
                                            {course?.courses?.slice(0, 5).map((_item, _index) => {
                                                let Component = course?.style == 'one' ? CoursesCard : OngoingCoursesCard

                                                return (
                                                    <Component
                                                        onPress={() => navigation.navigate('ProductPage', { _item })}
                                                        courseImage={_item.image}
                                                        courseTitle={_item.courseTitle}
                                                        courseDescription={_item.courseDescription}
                                                        key={_index}
                                                    />
                                                )
                                            })}
                                        </ScrollView>
                                    </View>
                                )
                            })
                        }
                    </View>
                </Container>
                <Footer />
            </KeyboardAwareScrollView>
        </View>
    )
}

export default DashboardView