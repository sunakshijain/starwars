import React from 'react';
import { Button, Form, FormGroup, Input, Col, CardBody, CardHeader, Card } from 'reactstrap';

export const LoginForm = (props) => {
    const { userName, password } = props.userData
    const onSubmit = (e) => {
        e.preventDefault();
        props.handleLogin({userName, password})
    }
    const onChange = (e) => {
        props.handleChange({ [e.target.name]: e.target.value })
    }

    return (
        <Col xs="4" className="d-block mx-auto" style={{ marginTop: '15%' }}>
            <Card>
                <CardHeader>Login</CardHeader>
                <CardBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Input type="text" onChange={onChange} value={userName} name="userName" id="username" placeholder="User Name" required />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Input type="password" onChange={onChange} value={password} name="password" id="password" placeholder="Password" required />
                        </FormGroup>
                        {' '}
                        <Button disabled={props.showLoading}>Submit</Button>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    );
}
