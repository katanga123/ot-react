import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import AuthService from '../../services/AuthService'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faChevronLeft, faIgloo, faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons'

import avatar from '../../assets/image/user.jpeg'


const TopNavigation = () => {

    let history = useHistory()

    const [status, setShowModal] = useState(false);

    const checkUrl = (path) => {
        let url = history.location.pathname.split("/").length - 1

        return url >= 2
            ? <button onClick={() => history.goBack()}>
                <FontAwesomeIcon icon={faChevronLeft} className="text-2xl ot-blue" />
            </button>
            : <Link to={path}>
                <FontAwesomeIcon icon={faPlus} className="text-2xl ot-blue" />
            </Link>
    }

    const clickShowModal = () => setShowModal(!status)

    const leftModal = () => (
        <div className="absolute bg-white rounded-lg right-0 mt-2 w-56 shadow-lg z-40">
            <ul className="text-left">
                <li>
                    <Link to="/" className="px-4 py-2 block relative font-semibold">
                        <FontAwesomeIcon icon={faIgloo} className="text-lg text-gray-400 mr-2 mt-1" /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="px-4 py-2 block relative font-semibold">
                        <FontAwesomeIcon icon={faUser} className="text-lg text-gray-400 mr-2 mt-1" /> Account Settings
                    </Link>
                </li>
                <li>
                    <Link to="/" className="px-4 py-2 block relative font-semibold" onClick={() => { AuthService.logout(() => history.push('/')) }}>
                        <FontAwesomeIcon icon={faPowerOff} className="text-lg text-gray-400 mr-2 mt-1" /> Logout
                    </Link>
                </li>
            </ul>
        </div>
    )

    return (

        <header className="ot-top-navigation container mx-auto w-full flex items-center justify-between py-5">
            <div className="ot-left-item">
                {checkUrl('/subject/create')}
            </div>
            <div className="ot-right-item relative" onClick={clickShowModal}>
                <img src={avatar} alt="User avatar" className="rounded-full w-10 cursor-pointer" />
                {status ? leftModal() : null}
            </div>
        </header>
    )

}

export default TopNavigation