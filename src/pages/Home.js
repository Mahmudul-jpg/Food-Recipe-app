import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron'
import { useContext, useEffect } from 'react'
import axios from 'axios'
import Food from '../components/foodContainer/Food'
import { MyContext } from '../Context'
function Home() {
    const { meals, setMeals } = useContext(MyContext)
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
            .then(({ data }) => setMeals(data.meals))
            .catch((error) => console.log(error))
    })
    return (<div>
        <Jumbotron />
        <Food meals={meals} />
    </div>);
}

export default Home;


