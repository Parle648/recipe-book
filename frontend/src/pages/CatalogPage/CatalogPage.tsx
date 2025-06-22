import type { FC } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const CatalogPage: FC = () => {
  return (
    <RecipeCard
      strMeal="Fish pie"
      strMealThumb="https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg"
      idMeal="52802"
    />
  );
};

export default CatalogPage;
