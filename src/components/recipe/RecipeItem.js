import React from 'react';
import PropTypes from 'prop-types';
import IngredientList from './IngredientList';






 function RecipeItem({title,thumbnail, ingredients}){
  return (
    <>
     <img variant="top" src={thumbnail}  alt={title} />
     <h2> {title} </h2>
     <IngredientList ingredients={ingredients} />

    </>
);
}

export default RecipeItem;


RecipeItem.propTypes ={
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
