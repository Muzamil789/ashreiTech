import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { icons, images } from "../assets";

const useProductPageViewModel = () => {
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [enrollModalVisible, setEnrollModalVisible] = useState(false);
    const [readMore, setReadMore] = useState(false)
    const [selectedCheckBox, setSelectedCheckBox] = useState([]);
    const [showMoreSkills, setShowMoreSkills] = useState(false);
    const [showAccordion, setShowAccordion] = useState(true);


    const navigation = useNavigation();

    const days = [
        {
            id: 1,
            day: 'Mon',
        },
        {
            id: 2,
            day: 'Tue',
        },
        {
            id: 3,
            day: 'Wed',
        },
        {
            id: 4,
            day: 'Thu',
        },
        {
            id: 5,
            day: 'Fri',
        },
        {
            id: 6,
            day: 'Sat',
        },
    ]

    const time = [
        {
            id: 1,
            time: '11AM to 1PM',
        },
        {
            id: 2,
            time: '1PM to 3PM',
        },
        {
            id: 3,
            time: '3PM to 5PM',
        },
        {
            id: 4,
            time: '5PM to 7PM',
        },
        {
            id: 5,
            time: '7PM to 9PM',
        },
        {
            id: 6,
            time: '9PM to 11PM',
        },
    ]

    const handleDay = (day) => {
        setSelectedDay(day)
    }

    const handleTime = (time) => {
        setSelectedTime(time)
    }

    const skills = [
        {
            id: 1,
            skill: 'Data wrangling'
        },
        {
            id: 2,
            skill: 'Data exploration'
        },
        {
            id: 3,
            skill: 'Data visualization'
        },
        {
            id: 4,
            skill: 'Mathematical computing'
        },
        {
            id: 5,
            skill: 'Web scraping'
        },
        {
            id: 6,
            skill: 'Hypothesis building'
        },
        {
            id: 7,
            skill: 'Python programming concepts'
        },
        {
            id: 8,
            skill: 'NumPy and SciPy package'
        },
        {
            id: 9,
            skill: 'Scikit learn package for Natural Language Processing'
        },
    ]

    const handleEnrollCourse = () => {
        setEnrollModalVisible(true)
    }

    const handleEnrollContinue = () => {
        navigation.navigate('Dashboard')
        setEnrollModalVisible(false)
        return
    }

    const handleReadMore = () => {
        setReadMore(!readMore)
    }

    const handleCheckbox = (index) => {
        setSelectedCheckBox(prev => (
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        ));
    };

    const handleMoreSkills = () => {
        setShowMoreSkills(!showMoreSkills)
    }

    const companyImages = [
        {
            id: 1,
            image: icons.Logo
        },
        {
            id: 2,
            image: icons.Logo
        },
        {
            id: 3,
            image: icons.Logo
        },
        {
            id: 4,
            image: icons.Logo
        },
        {
            id: 5,
            image: icons.Logo
        },
        {
            id: 6,
            image: icons.Logo
        },
        {
            id: 7,
            image: icons.Logo
        },
    ]

    const handleShowAccordion = () => {
        setShowAccordion(!showAccordion)
    }
    const handleAddToCart = () => {
        navigation.navigate('Cart')
    }

    return {
        states: {
            days,
            time,
            selectedDay,
            selectedTime,
            enrollModalVisible,
            readMore,
            skills,
            selectedCheckBox,
            showMoreSkills,
            companyImages,
            showAccordion
        },
        functions: {
            handleDay,
            handleTime,
            handleEnrollCourse,
            handleEnrollContinue,
            handleReadMore,
            handleCheckbox,
            handleMoreSkills,
            handleShowAccordion,
            handleAddToCart
        }
    }
}

export default useProductPageViewModel