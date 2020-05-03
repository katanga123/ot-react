import React from 'react';

import TopNavigation from "../components/Navigation/topNavigation"
import BottomNavigation from "../components/Navigation/bottomNavigation"


const Layout = (props) => {
    return (
        <div className="ot-main-layout px-4">

            {props.pathname !== '/login' && props.pathname !== '/register' && props.pathname !== '/reset-password' ? <TopNavigation /> : null}

            {props.children}

            {props.pathname !== '/login' && props.pathname !== '/register' && props.pathname !== '/reset-password' ? <BottomNavigation /> : null}

        </div>
    )
}

export default Layout