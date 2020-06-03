import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const RenderSuccess = ({ successData }) => {

    const message = successData ?
        <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div className="flex">
                <div >
                    <FontAwesomeIcon icon={faInfoCircle} className="text-2xl h-6 w-6 text-teal-500 mr-4" />
                </div>
                <div>
                    <p className="font-bold">{successData.message}</p>
                </div>
            </div>
        </div>
        : null

    return (<div className="erro-cover">{message}</div>)
}

export default RenderSuccess