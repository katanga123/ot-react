import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

// services
import AuthService from '../../services/AuthService'
import UrlService from '../../services/UrlService'
import RenderErrors from '../Error/RenderErrors';

class RegisterPage extends Component {

    constructor() {
        super()

        this.state = {
            redirectToReferrer: false,
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            checkbox: false,
            errorMessage: []
        }
    }

    handleInput = (e) => {

        const target = e.target;
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        });


    }

    handleRegisterSubmit = (e) => {
        e.preventDefault()

        const postData = {
            name: this.state.first_name + ' ' + this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            checkbox: this.state.checkbox
        }

        console.log(postData)

        axios.post(UrlService.registerUrl(), postData)
            .then((response) => {
                AuthService.login(response.data, () => {
                    this.setState({
                        redirectToReferrer: true
                    })
                })
            })
            .catch((error) => {
                this.setState({
                    errorMessage: error.response.data
                })
            })


    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer, errorMessage } = this.state

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }

        return (
            <div className="ot-auth-container bg-white flex justify-center items-top p-0 m-0 overflow-auto sm:overflow-auto md:overflow-auto lg:overflow-hidden xl:overflow-hidden absolute top-0 bottom-0 left-0 right-0">
                <div className="relative px-4 w-full w-4/12 sm:w-full md:w-6/12 lg:w-6/12 xl:w-3/12">
                    <div className="ot-form-container text-center mt-16 mb-6">
                        <h1 className="ot-header pb-4">Register</h1>
                        <p className="ot-sub-header">Mel ea numquam efficiendi appellantur, eu vix reque inermis propriae, animal.</p>
                    </div>
                    <RenderErrors errorData={errorMessage} />
                    <div className="ot-form-container max-auto mt-16 pb-16">
                        <form onSubmit={this.handleRegisterSubmit}>
                            <div className="ot-form-control flex flex-row relative">
                                <input type="text" name="first_name" className="ot-input mr-4" placeholder="First Name" value={this.state.first_name} onChange={this.handleInput} />
                                <input type="text" name="last_name" className="ot-input" placeholder="Last Name" value={this.state.last_name} onChange={this.handleInput} />
                            </div>
                            <div className="ot-form-control relative">
                                <input type="email" name="email" className="ot-input" placeholder="Email" value={this.state.email} onChange={this.handleInput} />
                            </div>
                            <div className="ot-form-control relative">
                                <input type="password" name="password" className="ot-input" placeholder="Password" value={this.state.password} onChange={this.handleInput} />
                            </div>
                            <div className="ot-form-control relative">
                                <input type="password" name="password_confirmation" className="ot-input" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={this.handleInput} />
                            </div>
                            <label className="ot-paragraph relative pl-6">
                                <input className="ot-checkbox" type="checkbox" name="checkbox" defaultChecked={this.state.checkbox} onChange={this.handleInput} />
                                <span className="ot-checkmark"></span>
                            I agree with our <Link to="/terms" className="font-medium text-blue-600">Terms</Link> and <Link to="/condition" className="font-medium text-blue-600">Conditions</Link>
                            </label>
                            <button className="ot-btn ot-btn-regular mt-16">Register</button>
                            <p className="ot-paragraph text-center">Already have an account?  <Link to="/login" className="text-blue-600 font-medium">Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPage