import React from 'react'
import CourseCategoriesView from '../../views/CourseCategoriesView'
import useCourseCategoriesViewModel from '../../useviewmodels/useCourseCategoriesViewModel';

const CourseCategories = ({ route }) => {
    const { course } = route.params;
    const { states, functions } = useCourseCategoriesViewModel();
    const { coursesCategories } = states;
    const { handleDetail } = functions;
    return (
        <CourseCategoriesView coursesCategories={coursesCategories} handleDetail={handleDetail} course={course} />
    )
}

export default CourseCategories