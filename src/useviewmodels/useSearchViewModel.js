import { useNavigation } from "@react-navigation/native"

const useSearchViewModel = () => {

    const topSearches = [
        {
            id: 1,
            name: 'SAP Ariba'
        },
        {
            id: 2,
            name: 'SAP S/4HANA'
        },
        {
            id: 3,
            name: 'Salesforce'
        },
        {
            id: 4,
            name: 'Oracle Development'
        },
        {
            id: 5,
            name: 'Vue Js'
        },
        {
            id: 6,
            name: 'React Js'
        },
        {
            id: 7,
            name: 'Altitude'
        },
        {
            id: 8,
            name: 'JavaScript Training'
        },
        {
            id: 9,
            name: 'SAP Training'
        },
        {
            id: 10,
            name: 'Salesforce Sales Cloud'
        },
        {
            id: 11,
            name: 'DotNet Development'
        },
        {
            id: 12,
            name: 'Node js development'
        },
    ]

    const courses = [
        {
            id: 1,
            name: 'SAP'
        },
        {
            id: 2,
            name: 'Salesforce'
        },
        {
            id: 3,
            name: 'Altitude'
        },
        {
            id: 4,
            name: 'Sprinklr'
        },
        {
            id: 5,
            name: 'Data Tex'
        },
        {
            id: 6,
            name: 'Coats Digital'
        },
        {
            id: 7,
            name: 'Business Process Outsourcing'
        },
        {
            id: 8,
            name: 'Business Process Outsourcing'
        },
        {
            id: 9,
            name: 'Delinquency Payment Management System'
        },
        {
            id: 10,
            name: 'System of Knowledge'
        },
        {
            id: 11,
            name: 'Mobile App Development'
        },
    ]
    const navigation = useNavigation();

    const handleBack = () => {
        console.log('handleBack function call')
        navigation.goBack()
    }

    const handleTopSearches = (index) => {
        console.log(index, 'index')
    }

    return {
        states: {
            topSearches,
            courses
        },
        functions: {
            handleBack,
            handleTopSearches
        }
    }
}

export default useSearchViewModel