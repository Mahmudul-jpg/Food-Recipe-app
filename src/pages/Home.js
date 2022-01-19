import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Food from '../components/foodContainer/Food'
function Home() {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
            // .then(res => res.json())
            .then(({ data }) => setMeals(data.meals))
            .catch((error) => console.log(error))
    }, [])
    return (<div>
        <Jumbotron />
        <Food meals={meals} />
    </div>);
}

export default Home;


