import React from 'react';

import TopNavigation from "../components/Navigation/topNavigation"
import BottomNavigation from "../components/Navigation/bottomNavigation"

const Layout = (props) => {
    return (
        <div className="ot-main-layout px-4">
            <TopNavigation />

            {props.children}

            {/* bottom Navigation */}
            <BottomNavigation />
        </div>
    )
}

export default Layout