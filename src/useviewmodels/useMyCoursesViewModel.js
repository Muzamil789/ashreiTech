import { useNavigation } from "@react-navigation/native";

const useMyCoursesViewModel = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack()
    }

    const courses = [
        {
            id: 1,
            heading: 'Introduction to UI/UX Design',
            duration: '1 Month',
            enrolled: '01 June, 2023',
            progress: '85% Completed',
        },

        {
            id: 2,
            heading: 'Mastering React Native for Beginners',
            duration: '2 Month',
            enrolled: '10 June, 2023',
            progress: '40% Completed',
        },

        {
            id: 3,
            heading: 'Building Responsive Layouts with Flexbox',
            duration: '3 Month',
            enrolled: '15 May, 2023',
            progress: '100% Completed',
        },
    ]
    return {
        states: {
            courses
        },
        functions: {
            goBack
        }
    }
}

export default useMyCoursesViewModel