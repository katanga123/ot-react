import React, { Component } from 'react';
import axios from 'axios'

// Services
import UrlService from '../../services/UrlService'
import RenderErrors from '../Error/RenderErrors';
import RenderSuccess from '../Error/RenderSuccess';

class CreateSubjectPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            subject: '',
            code: '',
            user_id: '',
            descriptions: '',
            errorMessage: [],
            successMessage: '',
        }
    }

    handleInput = (e) => {
        const target = e.target;
        const value = target.value
        const name = target.name
        const user_id = this.props.userData.id

        this.setState({
            user_id,
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const postData = {
            subject: this.state.subject,
            code: this.state.code,
            descriptions: this.state.descriptions,
            user_id: this.state.user_id
        }

        axios.post(UrlService.subjectUrl(), postData, UrlService.configContentType())
            .then(response => {
                this.setState({
                    subject: '',
                    code: '',
                    user_id: '',
                    descriptions: '',
                    successMessage: response.data
                })
            })
            .catch(error => {
                this.setState({
                    errorMessage: error.response.data
                })
            })
    }

    render() {
        const { errorMessage, successMessage } = this.state

        return (
            <div className="ot-home-page-container pt-2 pb-20 container max-w-screen-sm mx-auto">
                <h2 className="ot-header">Create Subjects</h2>
                <RenderErrors errorData={errorMessage} />
                <RenderSuccess successData={successMessage} />
                {/* Create Subjects */}
                <div className="ot-subjects-container py-4 ">
                    <form onSubmit={this.handleSubmit}>
                        <div className="ot-form-control">
                            <input type="text" name="subject" value={this.state.subject} onChange={this.handleInput} className="ot-input-white" placeholder="Subject" />
                        </div>
                        <div className="ot-form-control">
                            <input type="text" name="code" value={this.state.code} onChange={this.handleInput} className="ot-input-white" placeholder="Subject Code" />
                        </div>
                        <div className="ot-form-control">
                            <textarea type="text" name="descriptions" value={this.state.descriptions} onChange={this.handleInput} className="ot-input-white" placeholder="Desciption"></textarea>
                        </div>
                        <button className="ot-btn ot-btn-regular">Create Subject</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateSubjectPage;