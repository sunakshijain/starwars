import React, { Component } from 'react';
import Components from './components'

const { LoginForm } = Components
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }
    componentWillReceiveProps({ login }) {
        const { isLoggedIn } = login;
        if (isLoggedIn) {
            this.redirectToPlanets(this.props)
        }
    }
    handleChange = (userData) => {
        this.setState(userData)
    }
    redirectToPlanets = ({ history }) => {
        return history.push('/')
    }
    handleLogin = ({ userName, password }) => {
        this.props.loginUser({ userName, password })
    }
    render() {
        const { login } = this.props
        return (<LoginForm handleLogin={this.handleLogin} userData={this.state} handleChange={this.handleChange} showLoading={login.showLoading} />)
    }
}

export default Login