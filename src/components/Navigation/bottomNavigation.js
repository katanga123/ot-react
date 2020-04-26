import React, { Component } from 'react';

import BottomNavItems from './bottomNavItems'

class BottomNavigation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showNav: false,
        }
    }

    render() {
        return (
            <nav className="ot-bottom-navigation w-full fixed bottom-0 left-0 right-0 bg-white shadow">
                <BottomNavItems />
            </nav>
        )
    }

}

export default BottomNavigation