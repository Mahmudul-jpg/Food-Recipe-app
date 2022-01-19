import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import './style.css'
const Jumbotron = () => {
    return <div className="jumbotron">
        <h1 style={{ color: 'white' }}>Welcome and you can search your favourite recipe here</h1>
        <br />
        <InputGroup className="mb-3 button-input">
            <FormControl
                placeholder="Search for Recipe"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-info" id="button-addon3">Button</Button>
        </InputGroup>
    </div>;
};

export default Jumbotron;

