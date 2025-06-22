import { useEffect, type FC } from "react";
import { useAppSelector } from "../../store/store";
import RecipeCard from "../RecipeCard/RecipeCard";
import axios from "axios";

const RecipeCardList: FC = () => {
  const { meals } = useAppSelector((store) => store.mealsSlice);

  useEffect(() => {
    (async () => {
      console.log(await axios.get("http://localhost:3000/recipes"));
    })();
  }, []);

  return (
    <>
      {meals &&
        meals.map((meal) => {
          return (
            <RecipeCard
              key={meal.idMeal}
              strMeal={meal.strMeal}
              strMealThumb={meal.strMealThumb}
              idMeal={meal.idMeal}
            />
          );
        })}
    </>
  );
};

export default RecipeCardList;
