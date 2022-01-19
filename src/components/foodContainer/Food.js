import React from 'react';
import FoodCard from '../FoodCard/FoodCard'
function Food({ meals }) {
    return <div>{meals.map((meal) => (<FoodCard />))}</div>;
}

export default Food;

