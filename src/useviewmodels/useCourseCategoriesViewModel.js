import { images } from "../assets"

const useCourseCategoriesViewModel = () => {
    const coursesCategories = [
        {
            id: 1,
            image: images.course1,
            courseTitle: 'React Native - The Practical Guide [2023]',
            courseDescription: 'React (web framework) Web Development, Front-End Web',
            coursePrice: '15,900'
        },
        {
            id: 2,
            image: images.course2,
            courseTitle: 'React Native - The Practical Guide [2023]',
            courseDescription: 'React (web framework) Web Development, Front-End Web',
            coursePrice: '15,900'
        },
        {
            id: 3,
            image: images.course3,
            courseTitle: 'React Native - The Practical Guide [2023]',
            courseDescription: 'React (web framework) Web Development, Front-End Web',
            coursePrice: '15,900'
        },
        {
            id: 4,
            image: images.course4,
            courseTitle: 'React Native - The Practical Guide [2023]',
            courseDescription: 'React (web framework) Web Development, Front-End Web',
            coursePrice: '15,900'
        },
    ]

    return {
        states: {
            coursesCategories
        },
        functions: {

        }
    }
}

export default useCourseCategoriesViewModel