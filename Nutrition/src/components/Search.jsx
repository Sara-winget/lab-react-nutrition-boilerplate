import React from 'react'
import { useState } from 'react';
function Search({query,handleSearch,handleReset}){
    
    return(
    <>
    
        <label><h2>Search</h2></label>
       
        <input style={{width:500,height:50,fontSize:30}} id='search' name='name' value={query} onChange={handleSearch}/>
        <span style={{fontSize:30}} onClick={{handleReset }}>  x</span>
    </>)
}export default Search;