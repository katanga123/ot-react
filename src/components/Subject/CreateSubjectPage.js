import React from 'react';
import { Link } from 'react-router-dom'

const CreateSubjectPage = (props) => {
    return (
        <div className="ot-home-page-container py2 container max-w-screen-sm mx-auto">
            <h2 className="ot-header">Create Subjects</h2>

            {/* Create Subjects */}
            <div className="ot-subjects-container py-4 ">
                <form>
                    <div className="ot-form-control">
                        <input className="ot-input-white" placeholder="Subject" />
                    </div>
                    <div className="ot-form-control">
                        <input className="ot-input-white" placeholder="Subject Code" />
                    </div>
                    <div className="ot-form-control">
                        <textarea className="ot-input-white" placeholder="Desciption"></textarea>
                    </div>
                    <button className="ot-btn ot-btn-regular">Create Subject</button>
                    <Link to="/subject" className="ot-btn ot-btn-default">Cancel</Link>
                </form>
            </div>
        </div>

    )
}

export default CreateSubjectPage;