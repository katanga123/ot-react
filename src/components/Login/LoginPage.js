import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import ErrorHandler from '../../components/Error/ErrorHandler'
import RenderErrors from '../../components/Error/RenderErrors'

import axios from 'axios'
import UrlService from '../../services/UrlService'

class LoginPage extends Component {
    state = {
        redirectToReferrer: false,
        email: '',
        password: '',
        errors: {
            email: '',
            password: '',
        },
        errorMessage: []
    }

    handleInput = (e) => {

        const target = e.target;
        const value = target.value
        const name = target.name
        const errors = this.state.errors

        ErrorHandler.errorValidator(name, value, errors)

        this.setState({
            errors,
            [name]: value
        });


    }

    handleSubmitLogin = (e) => {

        e.preventDefault();

        const postData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post(UrlService.loginUrl(), postData)
            .then(response => {

                AuthService.authenticate(() => {
                    this.setState({
                        redirectToReferrer: true,
                    })
                })

                return response.data

            })
            .catch(error => {
                this.setState({
                    errorMessage: error.response.data
                })
            })

    }

    render() {

        const { redirectToReferrer, errorMessage } = this.state

        if (redirectToReferrer === true) {
            return <Redirect to='/' />
        }

        return (
            <div className="ot-auth-container bg-white flex justify-center items-top p-0 m-0 overflow-auto sm:overflow-auto md:overflow-auto lg:overflow-hidden xl:overflow-hidden absolute top-0 bottom-0 left-0 right-0" >
                <div className="relative px-4 w-full w-4/12 sm:w-full md:w-6/12 lg:w-6/12 xl:w-3/12">
                    <div className="ot-form-container text-center mt-32 mb-8 relative">
                        <h1 className="ot-header pb-4">Sign In</h1>
                        <p className="ot-sub-header">Mel ea numquam efficiendi appellantur.</p>
                    </div>
                    <RenderErrors errorData={errorMessage} />
                    <div className="ot-form-container max-auto mt-16 pb-16">
                        <form onSubmit={this.handleSubmitLogin}>
                            <div className="ot-form-control relative">
                                <input type="email" name="email" className="ot-input" placeholder="Email" value={this.state.email} onChange={this.handleInput} />
                                {this.state.errors.email.length > 0 &&
                                    <span className='text-red-500 text-xs'>{this.state.errors.email}</span>}
                            </div>
                            <div className="ot-form-control relative">
                                <input type="password" name="password" className="ot-input" placeholder="Password" value={this.state.password} onChange={this.handleInput} />
                                <Link to="/reset-password" className="ot-link absolute right-0 m-4 text-blue-600 font-medium">Forgot password?</Link>
                                {this.state.errors.password.length > 0 &&
                                    <span className='text-red-500 text-xs absolute block'>{this.state.errors.password}</span>}
                            </div>
                            <button type="submit" className="ot-btn ot-btn-regular mt-16">Sign In</button>
                            <p className="ot-paragraph text-center">Don’t have an account? <Link to="/register" className="text-blue-600 font-medium">Create account</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage