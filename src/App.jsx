import { useEffect } from "react";
import Card from "./components/card";
import LetterSelector from "./components/LetterSelector"
import axios from "axios";
import { useState } from "react";
function App() {

  const [meals, setMeals] = useState([])

  const getMeals = (letter = 'a') => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((res) => {
      if (res.data.meals) {
        setMeals(res.data.meals)
      } else {
        setMeals([])
      }
    })
  }

  useEffect(() =>{
    getMeals()
  }, [])

  return (
    <div >
      <LetterSelector onSelect={(letter) => getMeals(letter)}/>
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

        {
          meals.map((meal) => (
            
            <Card 
            key={meal.idMeal}
            strMeal={meal.strMeal}
            strInstructions={meal.strInstructions}
            strMealThumb={meal.strMealThumb}
        />

          ))
        }
      </main>
    </div>
  );
}

export default App;
