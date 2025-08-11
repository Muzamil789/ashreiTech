import React from 'react'
import MyCoursesView from '../../views/MyCoursesView'
import useMyCoursesViewModel from '../../useviewmodels/useMyCoursesViewModel'

const MyCourses = () => {
    const { functions, states } = useMyCoursesViewModel();
    const { goBack } = functions;
    const { courses } = states;

    return (
        <MyCoursesView goBack={goBack} courses={courses} />
    )
}

export default MyCourses