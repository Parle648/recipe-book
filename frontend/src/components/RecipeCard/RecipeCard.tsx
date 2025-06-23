import React from "react";
import { Link } from "react-router-dom";
import { ROUTING_PATHS } from "../../routes/paths";

interface RecipeCardProps {
  strMeal: string;
  strMealThumb: string;
  idMeal: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  strMeal,
  strMealThumb,
  idMeal,
}) => {
  return (
    <Link to={ROUTING_PATHS.DYNAMIC_RECIPE_PAGE(idMeal)}>
      <div className="w-80 cursor-pointer max-w-sm rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src={strMealThumb}
          alt={strMeal}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{strMeal}</h2>
          <p className="text-sm text-gray-500">Meal ID: {idMeal}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
