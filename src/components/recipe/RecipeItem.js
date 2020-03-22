import React from 'react';
import PropTypes from 'prop-types';






 function RecipeItem({title,thumbnail}){
  return (
    <>
     <img variant="top" src={thumbnail} />
     <h2> {title} </h2>
    </> 
);
}


export default RecipeItem;
