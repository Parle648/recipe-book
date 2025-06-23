import { useEffect, type FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import RecipeCard from "../RecipeCard/RecipeCard";
import axios from "axios";
import { setMeals, type IMeal } from "../../store/slices/meals";

const RecipeCardList: FC = () => {
  const dispatch = useAppDispatch();
  const { meals } = useAppSelector((store) => store.mealsSlice);

  useEffect(() => {
    (async () => {
      try {
        const mealsResponse = await axios.get<{ meals: IMeal[] }>(
          "http://localhost:3000/recipes"
        );

        dispatch(setMeals(mealsResponse.data.meals));
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);

  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
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
    </div>
  );
};

export default RecipeCardList;
