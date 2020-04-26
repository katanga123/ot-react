import React from 'react';
import { Link } from 'react-router-dom'

const ResetPasswordPage = () => {
    return (
        <div className="ot-auth-container bg-white flex justify-center items-top p-0 m-0 overflow-auto sm:overflow-auto md:overflow-auto lg:overflow-hidden xl:overflow-hidden absolute top-0 bottom-0 left-0 right-0">
            <div className="relative px-4 w-full w-4/12 sm:w-full md:w-6/12 lg:w-6/12 xl:w-3/12">
                <div className="ot-form-container text-center mt-16 mb-6">
                    <h1 className="ot-header pb-4">Forgot password</h1>
                    <p className="ot-sub-header">Mel ea numquam efficiendi appellantur, eu vix reque inermis propriae, animal scaevola.</p>
                </div>
                <div className="ot-form-container max-auto mt-16 pb-16">
                    <div className="ot-form-control relative">
                        <input type="email" className="ot-input" placeholder="Email" />
                    </div>
                    <button className="ot-btn ot-btn-regular mt-16">Cotinue</button>
                    <Link to="/login" className="ot-btn ot-btn-default">Cancel</Link>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage