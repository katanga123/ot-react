import React from 'react';
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className="ot-auth-container bg-white flex justify-center items-top p-0 m-0 overflow-auto sm:overflow-auto md:overflow-auto lg:overflow-hidden xl:overflow-hidden absolute top-0 bottom-0 left-0 right-0">
            <div className="relative px-4 w-full w-4/12 sm:w-full md:w-6/12 lg:w-6/12 xl:w-3/12">
                <div className="ot-form-container text-center mt-32 mb-8">
                    <h1 className="ot-header pb-4">Sign In</h1>
                    <p className="ot-sub-header">Mel ea numquam efficiendi appellantur.</p>
                </div>
                <div className="ot-form-container max-auto mt-16 pb-16">
                    <div className="ot-form-control relative">
                        <input type="email" className="ot-input" placeholder="Email" />
                    </div>
                    <div className="ot-form-control relative">
                        <input type="password" className="ot-input" placeholder="Password" />
                        <Link to="/reset-password" className="ot-link absolute right-0 m-4 text-blue-600 font-medium">Forgot password?</Link>
                    </div>
                    <button className="ot-btn ot-btn-regular mt-16">Sign In</button>
                    <p className="ot-paragraph text-center">Don’t have an account? <Link to="/register" className="text-blue-600 font-medium">Create account</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage