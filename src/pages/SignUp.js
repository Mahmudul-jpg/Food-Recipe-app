import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (<Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(event) => { setEmail(event.target.value) }}
                value={email}
            />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }}
                value={password}

            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>);
}

export default SignUp;
