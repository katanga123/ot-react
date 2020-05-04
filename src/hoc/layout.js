import React from 'react';

import TopNavigation from "../components/Navigation/topNavigation"
import BottomNavigation from "../components/Navigation/bottomNavigation"
import Cookie from 'universal-cookie'
const cookie = new Cookie()

const Layout = (props) => {
    const isAuth = cookie.get('access_token');
    return (
        <div className="ot-main-layout px-4">
            {isAuth ? <TopNavigation /> : null}

            {props.children}

            {isAuth ? <BottomNavigation /> : null}

        </div>
    )
}

export default Layout