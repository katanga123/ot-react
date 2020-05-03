import React from 'react';

const CreateSubjectPage = (props) => {
    return (
        <div className="ot-home-page-container pt-2 pb-20 container max-w-screen-sm mx-auto">
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
                </form>
            </div>
        </div>

    )
}

export default CreateSubjectPage;