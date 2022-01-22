import React from 'react';
import { Card, Button } from 'react-bootstrap'
import MealModal from '../MealModal/MealModal'
function FoodCard({ strMeal, strMealThumb, strInstructions }) {
    return (<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text> */}
            <MealModal title={strMeal} desc={strInstructions} />
            {/* <Button variant="primary">See more...</Button> */}
        </Card.Body>
    </Card>);
}
export default FoodCard