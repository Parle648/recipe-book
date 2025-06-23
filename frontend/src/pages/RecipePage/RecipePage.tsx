import axios from "axios";
import { useEffect, type FC } from "react";
import { useParams } from "react-router-dom";
import { setMeal, type IMeal } from "../../store/slices/meals";
import { useAppDispatch, useAppSelector } from "../../store/store";
import BackButton from "../../components/BackButton/BackButton";

const RecipePage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { currentMeal } = useAppSelector((store) => store.mealsSlice);

  console.log(currentMeal);

  useEffect(() => {
    (async () => {
      try {
        const mealsResponse = await axios.get<IMeal>(
          `http://localhost:3000/recipes/${id}`
        );

        dispatch(setMeal(mealsResponse.data));
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ingredient = currentMeal ? currentMeal[`strIngredient${i + 1}`] : [];
    const measure = currentMeal ? currentMeal[`strMeasure${i + 1}`] : [];
    return ingredient && ingredient.trim()
      ? { name: ingredient.trim(), measure: measure?.trim() }
      : null;
  }).filter(Boolean);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <BackButton />
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={currentMeal?.strMealThumb}
          alt={currentMeal?.strMeal}
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-center md:text-left mb-2">
            {currentMeal?.strMeal}
          </h1>
          <button
            onClick={() =>
              navigate(
                `/recipes?country=${encodeURIComponent(currentMeal?.strArea)}`
              )
            }
            className="text-blue-600 hover:underline mb-6 block text-center md:text-left"
          >
            {currentMeal?.strArea}
          </button>
          <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">
            Instructions
          </h2>
          <p className="text-gray-700 whitespace-pre-line">
            {currentMeal?.strInstructions}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
          Ingredients
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {ingredients.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() =>
                  navigate(
                    `/recipes?ingredient=${encodeURIComponent(item!.name)}`
                  )
                }
                className="block text-left text-blue-600 hover:underline"
              >
                {item!.measure} {item!.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipePage;
