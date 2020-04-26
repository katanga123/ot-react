import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import avatar from '../../assets/image/user.jpeg'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const TopNavigation = () => {

    let history = useHistory()

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

    return (
        <header className="ot-top-navigation container mx-auto w-full flex items-center justify-between py-5">
            <div className="ot-left-item">
                {checkUrl("/subject/create")}
            </div>
            <div className="ot-right-item">
                <img src={avatar} alt="User avatar" className="rounded-full w-10" />
            </div>
        </header>
    )

}

export default TopNavigation