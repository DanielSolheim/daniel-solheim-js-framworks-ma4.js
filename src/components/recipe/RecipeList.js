import React, {useState, useEffect} from "react";
import {API_URL} from "../constants/Api.js";
import Spinner from 'react-bootstrap/Spinner';
import RecipeItem from "./RecipeItem";
import Search from "./Search";



 function RecipeList(){

    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);


    var filterRecipes = function(e){
      const searchValue = e.target.value.toLowerCase();

      const filteredArray = recipes.filter(function(rec){

      const  lowerCaseTitle = rec.title.toLowerCase();

       if (lowerCaseTitle.match(searchValue)){
         return true;
       }
       return false;
     });
     setFilteredRecipes(filteredArray);
    };


  useEffect(function(){
    fetch(API_URL)
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        setRecipes(json.results)
        setFilteredRecipes(json.results)
      })
      .catch(function(error){
        console.log(error)
      });

   }, []);



  return (

    <>
     <Search handleSearch={filterRecipes}/>
     <div className="cardContainer">
        {filteredRecipes.map(recipe => {
           const {title,thumbnail} = recipe;

             return (
             <div className="card">
                  <RecipeItem title={title} thumbnail={thumbnail} />
             </div>
             )


        })}

      </div>

      </>
  )
}


export default RecipeList;
