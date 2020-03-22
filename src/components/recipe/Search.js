import React from 'react';
import PropTypes from "prop-types";


export default function Search({handleSearch}){
  return(
     <input className="search" placeholder="search by Name ........."  onChange={event => handleSearch(event)} />
  );
}


Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}
