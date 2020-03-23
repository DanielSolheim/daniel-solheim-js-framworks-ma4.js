import React from 'react';
import PropTypes from 'prop-types';


export default function IngredientList({ingredients}){

    var arr = ingredients.split(', ');


   return (
    <>
     {arr.map(ingredientItem => {
      return (<li> {ingredientItem} </li>);
     })}
    </>
   );
}


IngredientList.propTypes = {
    ingredients: PropTypes.string.isRequired
}
