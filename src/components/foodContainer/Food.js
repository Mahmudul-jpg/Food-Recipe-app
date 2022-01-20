import React from 'react';
import FoodCard from '../FoodCard/FoodCard'
import "./style.css"
function Food({ meals }) {
    return <div className="meals-container">{meals.map((meal) => (<FoodCard {...meal} />))}</div>;
}

export default Food;

