import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

const RenderErrors = ({ errorData }) => {

    const listItem = errorData.errors ?
        <ul className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4">
            {Object.keys(errorData.errors).map((key, i) => {
                const error = errorData.errors[key][0]
                return (
                    <li className="text-sm font-semibold" key={i}>
                        <FontAwesomeIcon icon={faTimesCircle} className="text-sm text-orange-600" />&nbsp;{error}
                    </li>
                )
            })}
        </ul>
        : null


    return (<div className="erro-cover">{listItem}</div>)
}

export default RenderErrors