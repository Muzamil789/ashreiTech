import { View, Text, Image } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import TopView from '../../components/TopView'
import FontBold from '../../components/Typography/FontBold'
import { styles } from './style'
import { icons, images, tabIcons } from '../../assets'

const MyCoursesView = ({ goBack, courses }) => {
    return (
        <Container>
            <TopView tittle={'My Courses'} onPress={goBack} />

            <View style={styles.Container}>
                {courses.map((course, index) => (
                    <View style={styles.courseContainer} key={index}>
                        <View style={styles.courseDetailContainer}>
                            <FontBold name={course.heading} numberOfLines={2} style={styles.courseHeading} />

                            <View style={styles.coursesInsideContainer}>
                                <View style={styles.durationContainer}>
                                    <Image source={icons.ClockIcon} style={styles.timeIcon} />
                                    <View style={styles.texRrow}>
                                        <FontBold name={'Duration: '} style={styles.durationText} />
                                        <FontBold name={course.duration} style={styles.durationText} />
                                    </View>
                                </View>

                                <View style={styles.durationContainer}>
                                    <Image source={icons.enrolledCourse} style={styles.timeIcon} />
                                    <View style={styles.texRrow}>
                                        <FontBold name={'Course Enrolled: '} style={styles.durationText} />
                                        <FontBold name={course.enrolled} style={styles.durationText} />
                                    </View>
                                </View>

                                <View style={styles.durationContainer}>
                                    <Image source={tabIcons.tabCourses} style={styles.timeIcon} />
                                    <View style={styles.texRrow}>
                                        <FontBold name={'Course Progress: '} style={styles.durationText} />
                                        <FontBold name={course.progress} style={styles.durationText} />
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={styles.imageContainer}>
                            <Image source={images.LoginFrame} style={styles.courseImage} />
                        </View>
                    </View>
                ))}
            </View>
        </Container>
    )
}

export default MyCoursesView