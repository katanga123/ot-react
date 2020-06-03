import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {

    const handleSearchKeyword = (e) => {
        props.callback(e.target.value)
    }

    return (
        <div className="ot-search-container relative pt-4">
            <input className="ot-input-regular pl-10 shadow-lg py-4 text-lg" onChange={handleSearchKeyword} placeholder={props.placeholder} />
            <FontAwesomeIcon icon={faSearch} className="absolute left-0 mt-5 mx-3 text-lg ot-gray-300" />
        </div>
    )
}

export default Search