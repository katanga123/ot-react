import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'


import ProtectedRoute from './components/Widgets/ProtectedRoute'


import Layout from './hoc/layout'

import SubjectsPage from './components/Subject/SubjectsPage'
import CreateSubjectPage from './components/Subject/CreateSubjectPage'
import UpdateSubjectPage from './components/Subject/UpdateSubjectPage'

import ExamPage from './components/Exam/ExamPage'
import LoginPage from './components/Login/LoginPage'
import RegisterPage from './components/Register/RegisterPage'
import ResetPasswordPage from './components/ResetPassword/ResetPasswordPage'

import HomePage from './components/Home/HomePage';
import ProfilePage from './components/Profile/ProfilePage'
import PageNotFound from './components/Error/404'

import AuthData from '../src/hoc/auth'


const Routes = withRouter(({ location }) => {

    return (
        <Layout {...location}>
            <Switch>
                <Route path="/login" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/reset-password" exact component={ResetPasswordPage} />

                <ProtectedRoute path="/" exact component={HomePage} />
                <ProtectedRoute path="/profile" exact component={AuthData(ProfilePage)} />

                <ProtectedRoute path="/subject" exact component={SubjectsPage} />
                <ProtectedRoute path="/subject/create" exact component={AuthData(CreateSubjectPage)} />
                <ProtectedRoute path="/subject/:id" exact component={ExamPage} />
                <ProtectedRoute path="/subject/edit/:id" exact component={UpdateSubjectPage} />

                <Route component={PageNotFound} />
            </Switch>
        </Layout >
    )
})
export default Routes