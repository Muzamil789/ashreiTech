import React from 'react'
import CourseCategoriesView from '../../views/CourseCategoriesView'
import useCourseCategoriesViewModel from '../../useviewmodels/useCourseCategoriesViewModel';

const CourseCategories = () => {
    const { states, functions } = useCourseCategoriesViewModel();
    const { coursesCategories } = states;
    const { } = functions;
    return (
        <CourseCategoriesView coursesCategories={coursesCategories} />
    )
}

export default CourseCategories