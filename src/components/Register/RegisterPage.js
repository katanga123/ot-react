import React from 'react';
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (
        <div className="ot-auth-container bg-white flex justify-center items-top p-0 m-0 overflow-auto sm:overflow-auto md:overflow-auto lg:overflow-hidden xl:overflow-hidden absolute top-0 bottom-0 left-0 right-0">
            <div className="relative px-4 w-full w-4/12 sm:w-full md:w-6/12 lg:w-6/12 xl:w-3/12">
                <div className="ot-form-container text-center mt-16 mb-6">
                    <h1 className="ot-header pb-4">Register</h1>
                    <p className="ot-sub-header">Mel ea numquam efficiendi appellantur, eu vix reque inermis propriae, animal.</p>
                </div>
                <div className="ot-form-container max-auto mt-16 pb-16">
                    <div className="ot-form-control flex flex-row relative">
                        <input type="text" className="ot-input mr-4" placeholder="First Name" />
                        <input type="text" className="ot-input" placeholder="Last Name" />
                    </div>
                    <div className="ot-form-control relative">
                        <input type="email" className="ot-input" placeholder="Email" />
                    </div>
                    <div className="ot-form-control relative">
                        <input type="password" className="ot-input" placeholder="Password" />
                    </div>
                    <div className="ot-form-control relative">
                        <input type="password" className="ot-input" placeholder="Confirm Password" />
                    </div>
                    <label className="ot-paragraph relative pl-6">
                        <input className="ot-checkbox" type="checkbox" />
                        <span className="ot-checkmark"></span>
                        I agree with our <Link to="/terms" className="font-medium text-blue-600">Terms</Link> and <Link to="/condition" className="font-medium text-blue-600">Conditions</Link>
                    </label>
                    <button className="ot-btn ot-btn-regular mt-16">Register</button>
                    <p className="ot-paragraph text-center">Already have an account?  <Link to="/login" className="text-blue-600 font-medium">Sign In</Link></p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage