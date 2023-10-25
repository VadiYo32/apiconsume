import { useEffect } from "react";
import Card from "./components/card";
import LetterSelector from "./components/LetterSelector"
import axios from "axios";
import { useState } from "react";
function App() {
  const[meals, setMeals] = useState([]);

  const getMeals = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=c").then(res => {
      if(res.data.meals){
        setMeals(res.data.meals)
      }else{
        setMeals([])
      }
      
 
})
  }

  useEffect(()=>{
getMeals();
  }, [])
  return (
    <div  >
     <LetterSelector onSelect={(letter)=>getMeals(letter)}/>
      <main className="bg-black h-screen  grid grid-cols-1  md:grid-cols-2 sm:text-sm lg:grid-cols-4" >
        {
               meals.map((meal) => (
                <Card
                key={meal.idMeal}
                strMeal={meal.strMeal}
                strMealThumb={meal.strMealThumb}
                strInstructions={meal.strInstructions}
                >
        
                </Card>
              ))
        
        }
      </main>

    </div>
  );
}

export default App;
