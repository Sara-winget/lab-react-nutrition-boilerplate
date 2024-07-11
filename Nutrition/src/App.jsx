import React from "react";
import FoodData from "../../resources/FoodData";
import FoodBox from "./components/FoodBox";
import Search from "./components/Search";
import { useState } from "react";
function App(){
  const [foodList, setFoodList]=useState(FoodData);
  
  const [query,setQuery]=useState('');
  const handleSearch=(e)=>{
    const searchQuery=e.target.value
 setQuery(e.target.value)
  
  setFoodList(FoodData.filter(item=>
  item.name.toLowerCase().includes(searchQuery.toLowerCase())
 ))}

 const handleReset=()=>{
  setQuery('')
  setFoodList(FoodData)
 }
  return(
    <>
    <Search query={query} handleSearch={handleSearch} handleReset={handleReset}/>
    {foodList.map((food,index)=>(
      <FoodBox key={index} food={food} />
    ))}
    </>
  )
}
export default App;