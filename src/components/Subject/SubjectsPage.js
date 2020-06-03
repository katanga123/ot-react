import React, { Component } from 'react';
import axios from 'axios';
import UrlService from '../../services/UrlService'


import Search from '../Widgets/SearchComponent'
import SubjectItem from '../Subject/SubjectItem'


class SubjectsPage extends Component {

    state = {
        keywords: '',
        subjects: []
    }

    componentDidMount() {
        axios.get(UrlService.subjectUrl(), UrlService.configAccept())
            .then(response => {

                this.setState({
                    subjects: response.data.subjects
                })

            })
            .catch(error => {
                console.log(error)
            })
    }

    handleKeywords = (params) => {
        this.setState({
            keywords: params
        })
    }

    renderSubjects = (subjects) => {
        const keywords = this.state.keywords

        if (keywords === '') {

            return subjects.map(item => (
                <SubjectItem {...item} key={item.id} />
            ))

        } else {

            const results = subjects.filter(item => {
                const subject = item.subject.toLowerCase()

                return subject.includes(keywords.toLowerCase())
            })

            return results.map(item => (
                <SubjectItem {...item} key={item.id} />
            ))
        }


    }

    render() {
        const { subjects } = this.state
        return (
            <div className="ot-home-page-container pt-2 pb-20 container mx-auto">
                <h2 className="ot-header">My Subjects</h2>
                <Search placeholder={"Type subject name"} callback={this.handleKeywords} />

                {/* Subjects */}
                <div className="ot-subjects-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    {this.renderSubjects(subjects)}
                </div>
            </div>
        )
    }
}

export default SubjectsPage