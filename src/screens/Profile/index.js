import React from 'react'
import ProfileView from '../../views/ProfileView'
import useProfileViewModel from '../../useviewmodels/useProfileViewModel'

const Profile = () => {
    const { states, functions } = useProfileViewModel();
    const { goBack } = functions;

    return (

        <ProfileView goBack={goBack} />
    )
}

export default Profile