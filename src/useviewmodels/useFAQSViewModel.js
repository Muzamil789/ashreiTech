import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const useFAQSViewModel = () => {
    const navigation = useNavigation();
    const [selectedIndex, setSelectedIndex] = useState(null)

    const faqData = [
        {
            id: 1,
            faq: 'DevOps is a set of practices that combines software development and IT operations. It helps in faster deployment, better collaboration, and continuous delivery of high-quality software.',
        },
        {
            id: 2,
            faq: 'Anyone with a basic understanding of IT or programming can join. It’s suitable for beginners, developers, system admins, and aspiring DevOps engineers.',

        },
        {
            id: 3,
            faq: 'The training covers popular DevOps tools like Git, Jenkins, Docker, Kubernetes, Ansible, and basic cloud services like AWS or Azure.',

        },
        {
            id: 4,
            faq: 'The training is conducted online through live instructor-led sessions. You’ll also get access to recordings, notes, and support materials.',

        },
        {
            id: 5,
            faq: 'Yes, upon successful completion of the course, you will receive a DevOps training certificate that can enhance your resume and job prospects.',

        },
    ]

    const goBack = () => {
        navigation.goBack()
    }

    const handleShowFaq = (index) => {
        if (selectedIndex == index) {
            setSelectedIndex(null)
        }
        else {
            setSelectedIndex(index)
        }

    }

    return {
        states: {
            faqData,
            selectedIndex
        },
        functions: {
            goBack,
            handleShowFaq,
        }
    }
}

export default useFAQSViewModel