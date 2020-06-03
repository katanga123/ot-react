import React, { Component } from 'react';
import axios from 'axios';
import UrlService from '../services/UrlService'

const AuthData = (WrappedComponent) => {

    class AuthData extends Component {

        state = {
            userData: {}
        }

        componentDidMount() {

            axios.get(UrlService.getUser(), UrlService.configAccept())
                .then(response => {
                    this.setState({
                        userData: response.data
                    })
                })
                .catch(console.error())
        }

        render() {
            const { userData } = this.state
            return <WrappedComponent userData={userData} />
        }
    }

    return AuthData
}

export default AuthData