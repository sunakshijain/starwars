import Login from './login.jsx'
import { connect } from 'react-redux'
import { loginUser } from './action'
const mapStateToProps = ({ login }) => {
    return {
        login
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loginUser: (userData) => { dispatch(loginUser(userData)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)