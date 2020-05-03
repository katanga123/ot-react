import React from 'react';


import BottomNavItems from './bottomNavItems'

const BottomNavigation = () => {

    return (
        <nav className="ot-bottom-navigation w-full fixed bottom-0 left-0 right-0 bg-white shadow" >
            <BottomNavItems />
        </nav >
    )

}

export default BottomNavigation