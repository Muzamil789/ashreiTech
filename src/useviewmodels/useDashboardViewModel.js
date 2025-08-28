import { courses } from "../assets"

const useDashboardViewModel = () => {

    const CourseCategories = [
        {
            id: 1,
            courseName: 'Oracle Financials Cloud'
        },
        {
            id: 2,
            courseName: 'General Ledger'
        },
        {
            id: 3,
            courseName: 'SAP Ariba'
        },
        {
            id: 4,
            courseName: 'Oracle Project Management Cloud'
        },
        {
            id: 5,
            courseName: 'SAP Certified '
        },
    ]

    const Courses = [
        {
            id: 1,
            courseCategory: 'Suggested Courses',
            style: "one",
            courses: [
                {
                    id: 1,
                    image: courses.microsoftAzure,
                    courseTitle: 'Microsoft Azure Machine Learning',
                    courseDescription: 'Developing digital capabilities, and using',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'
                },
                {
                    id: 2,
                    image: courses.builtOperate,
                    courseTitle: 'Built Operate Transfer (BOT)',
                    courseDescription: 'To improve and manage a business process or',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 3,
                    image: courses.ViableProduct,
                    courseTitle: 'Minimum Viable Product (MVP)',
                    courseDescription: 'Oracle Cloud SCM continues to be a source of',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
            ]
        },
        {
            id: 2,
            courseCategory: 'oracle Courses',
            style: 'one',
            courses: [
                {
                    id: 1,
                    image: courses.oracleFusion,
                    courseTitle: 'Oracle Fusion Cloud Enterprise Resource Planning',
                    courseDescription: 'Developing digital capabilities, and using',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 2,
                    image: courses.oracleFusion,
                    courseTitle: 'Oracle Fusion Cloud Supply Chain (SCM)',
                    courseDescription: 'Oracle Cloud SCM continues to be a source of',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 3,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 4,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 5,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 6,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                },
            ]
        },
        {
            id: 3,
            courseCategory: 'Ongoing Courses',
            style: 'two',
            courses: [
                {
                    id: 1,
                    image: courses.oracleFusion,
                    courseTitle: 'Oracle Fusion Cloud Enterprise Resource Planning',
                    courseDescription: 'Developing digital capabilities, and using',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 2,
                    image: courses.oracleFusion,
                    courseTitle: 'Oracle Fusion Cloud Supply Chain (SCM)',
                    courseDescription: 'Oracle Cloud SCM continues to be a source of',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 3,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 4,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 5,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 6,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
            ]
        },
        {
            id: 4,
            courseCategory: 'Upcoming Courses',
            style: 'two',
            courses: [
                {
                    id: 1,
                    image: courses.oracleFusion,
                    courseTitle: 'Oracle Fusion Cloud Enterprise Resource Planning',
                    courseDescription: 'Developing digital capabilities, and using',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 2,
                    image: courses.oracleFusion,
                    courseTitle: 'Oracle Fusion Cloud Supply Chain (SCM)',
                    courseDescription: 'Oracle Cloud SCM continues to be a source of',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 3,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 4,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 5,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 6,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
            ]
        },
        {
            id: 5,
            courseCategory: 'Salesforce Cloud',
            style: 'one',
            courses: [
                {
                    id: 1,
                    image: courses.oracleFusion,
                    courseTitle: 'Oracle Fusion Cloud Enterprise Resource Planning',
                    courseDescription: 'Developing digital capabilities, and using',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 2,
                    image: courses.oracleFusion,
                    courseTitle: 'Oracle Fusion Cloud Supply Chain (SCM)',
                    courseDescription: 'Oracle Cloud SCM continues to be a source of',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 3,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 4,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 5,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
                {
                    id: 6,
                    image: courses.oracleFusion,
                    courseTitle: 'ORACLE Cloud Infrastructure',
                    courseDescription: 'We provide services to Migrate to Oracle Cloud',
                    coursePrice: '15000',
                    instructor: 'M.Rizwan Ahmed'

                },
            ]
        }
    ]




    return {
        states: {
            CourseCategories,
            Courses
        },
        functions: {

        }
    }
}

export default useDashboardViewModel