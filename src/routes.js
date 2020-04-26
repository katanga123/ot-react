import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Layout from './hoc/layout'
import SubjectsPage from './components/Subject/SubjectsPage'
import CreateSubjectPage from './components/Subject/CreateSubjectPage'
import ExamPage from './components/Exam/ExamPage'
import LoginPage from './components/Login/LoginPage'
import RegisterPage from './components/Register/RegisterPage'
import ResetPasswordPage from './components/ResetPassword/ResetPasswordPage'
import ProfilePage from './components/Profile/ProfilePage'
import PageNotFound from './components/Error/404'

const Routes = () => {
    return (
        <Layout>
            <Switch>
                {/* <Route path="/" exact component={HomePage} /> */}
                <Route path="/subject" exact component={SubjectsPage} />
                <Route path="/subject/create" exact component={CreateSubjectPage} />
                <Route path="/subject/:id" exact component={ExamPage} />
                <Route path="/profile" exact component={ProfilePage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/reset-password" exact component={ResetPasswordPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route component={PageNotFound} />
            </Switch>
        </Layout>
    )
}

export default Routes