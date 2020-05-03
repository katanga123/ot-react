import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import PrivateRoute from './components/Widgets/PrivateRoute'


import Layout from './hoc/layout'
import SubjectsPage from './components/Subject/SubjectsPage'
import CreateSubjectPage from './components/Subject/CreateSubjectPage'
import ExamPage from './components/Exam/ExamPage'
import LoginPage from './components/Login/LoginPage'
import RegisterPage from './components/Register/RegisterPage'
import ResetPasswordPage from './components/ResetPassword/ResetPasswordPage'

import HomePage from './components/Home/HomePage';
import ProfilePage from './components/Profile/ProfilePage'
import PageNotFound from './components/Error/404'

const Routes = withRouter(({ location }) => {
    return (
        <Layout {...location}>
            <Switch>
                <Route path="/login" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/reset-password" exact component={ResetPasswordPage} />
                <PrivateRoute path="/" exact component={HomePage} />
                <PrivateRoute path="/subject" exact component={SubjectsPage} />
                <PrivateRoute path="/profile" exact component={ProfilePage} />
                <PrivateRoute path="/subject/create" exact component={CreateSubjectPage} />
                <PrivateRoute path="/subject/:id" exact component={ExamPage} />
                <Route component={PageNotFound} />
            </Switch>
        </Layout>
    )
})
export default Routes