import React from 'react';
import { Route } from 'react-router-dom'
import {
    Redirect
} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    var { store } = rest
    const { login: { isLoggedIn } } = store.getState()
    return <Route {...rest} render={props => (
        isLoggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
    )} />
}
export default PrivateRoute;