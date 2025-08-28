import React, { useEffect } from 'react'
import DashboardView from '../../views/DashboardView'
import useDashboardViewModel from '../../useviewmodels/useDashboardViewModel'

const Dashboard = () => {
    const { states, functions } = useDashboardViewModel();
    const { CourseCategories, Courses } = states;
    const { } = functions;
    return (
        <DashboardView CourseCategories={CourseCategories} Courses={Courses} />
    )
}

export default Dashboard