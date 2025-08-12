import React from 'react'
import ScholarshipView from '../../views/ScholarshipView'
import useScholarshipViewModel from '../../useviewmodels/useScholarshipViewModel';

const Scholarship = () => {
    const { states, functions } = useScholarshipViewModel();
    const { degree, files, showModal } = states;
    const { goBack, handleUploadDegree, applyScholarship, handleSuccessModal } = functions;
    return (
        <ScholarshipView
            goBack={goBack}
            handleUploadDegree={handleUploadDegree}
            degree={degree}
            files={files}
            applyScholarship={applyScholarship}
            showModal={showModal}
            handleSuccessModal={handleSuccessModal}
        />
    )
}

export default Scholarship