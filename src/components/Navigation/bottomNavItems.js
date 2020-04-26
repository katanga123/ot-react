import React from 'react';
import { NavLink } from "react-router-dom"

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faUser, faShareSquare } from '@fortawesome/free-regular-svg-icons'

const NavItems = () => {
    const items = [
        {
            icon: faClipboard,
            link: '/subject',
            active: true,
            restricted: true,
            activeColor: { color: '#0A84FF' }
        },
        {
            icon: faShareSquare,
            link: '/shared-test',
            active: true,
            restricted: true,
            activeColor: { color: '#0A84FF' }
        },
        {
            icon: faUser,
            link: '/profile',
            active: true,
            restricted: true,
            activeColor: { color: '#0A84FF' }
        },
    ];

    const element = (item, i) => (
        <li className="w-1/3" key={i}>
            <NavLink to={item.link} exact className="flex items-center py-3 text-gray-600" activeStyle={item.activeColor}>
                <FontAwesomeIcon icon={item.icon} className="mx-auto text-2xl" />
            </NavLink>
        </li>
    )

    const showItems = () => (
        items.map((item, i) => {
            return element(item, i)
        })
    )

    return (
        <ul className="container max-w-screen-sm mx-auto flex items-center justify-between">
            {showItems()}
        </ul>
    )
}

export default NavItems