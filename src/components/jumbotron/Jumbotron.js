import React, { useState, useContext } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import './style.css'
import { MyContext } from "../../Context"
import axios from 'axios';
const Jumbotron = () => {
    const [searchInput, setSearchInput] = useState("")
    const { setMeals } = useContext(MyContext)
    const handleSearch = () => {

        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
            // .then((res) => console.log(res))
            .then(({ data }) => setMeals(data.meals))

    }
    return (<div className="jumbotron">
        <h1 style={{ color: 'white' }}>Welcome and you can search your favourite recipe here</h1>
        <br />
        <InputGroup className="mb-3 button-input">
            <FormControl
                placeholder="Search for Recipe"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
            />
            <Button variant="outline-info" id="button-addon3" onClick={handleSearch}>Button</Button>
        </InputGroup>
    </div>
    )
};

export default Jumbotron;

