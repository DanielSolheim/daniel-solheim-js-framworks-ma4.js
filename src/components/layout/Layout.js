import React from "react";
import RecipeList from "../recipe/RecipeList.js";
import Container from "react-bootstrap/Container";

export default function Layout(){
  return (
    <Container>
        <RecipeList/>
    </Container>
  );
}
