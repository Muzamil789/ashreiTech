import { View, Text } from 'react-native'
import React from 'react'
import SearchView from '../../views/SearchView'
import useSearchViewModel from '../../useviewmodels/useSearchViewModel'

const Search = () => {
    const { states, functions } = useSearchViewModel();
    const { topSearches, courses } = states;
    const { handleBack, handleTopSearches } = functions;
    return (
        <SearchView handleBack={handleBack} topSearches={topSearches} handleTopSearches={handleTopSearches} courses={courses} />
    )
}

export default Search