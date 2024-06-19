import { useState } from "react";
import "./App.css";

import FoodBox from "./component/FoodBox";

function App() {
  const foods=[
    {
      "id": 0,
      "img": "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/pizza-react.jpg",
      "name": "pizza",
      "cal": 266
    },
    {
      "id": 1,
      "img": "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/apple-react.jpeg",
      "name": "apple",
      "cal": 52
    },
    {
      "id": 3,
      "img": "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/orange-react.jpeg",
      "name": "oranges",
      "cal": 47
    },
    {
      "id": 4,
      "img": "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/almonds-react.jpeg",
      "name": "almonds",
      "cal": 7
    },
    {
      "id": 5,
      "img": "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/burger-react.jpeg",
      "name": "burger",
      "cal": 295
    }
  ]
  const [filFoods, setFilFoods] = useState(foods);

  const handleSearch = (event) => {
    const searchVal = event.target.value;
    setFilFoods(
      foods.filter((food) => food.name.toLowerCase().includes(searchVal))
    );
  };

  return (
    <>
      <div>
        <input
          className="FoodBox"
          type="text"
          onChange={handleSearch}
          
        />
        {filFoods.map((food, index) => (
          <FoodBox key={index} food={food} />
        ))}
      </div>
    </>
  );
}

export default App;