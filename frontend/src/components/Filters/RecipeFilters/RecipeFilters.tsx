import {
  Box,
  FormControl,
  InputLabel,
  type SelectChangeEvent,
} from "@mui/material";
import type { FC } from "react";
import { useGetIngredientsQuery } from "../../../store/api/filters";

const RecipeFilters: FC = () => {
  const handleCountryChange = (event: SelectChangeEvent) => {
    // onCountryChange(event.target.value as string);
  };

  const handleIngredientChange = (event: SelectChangeEvent) => {
    // onIngredientChange(event.target.value as string);
  };

  console.log(import.meta.env.VITE_API_URL);

  const data = useGetIngredientsQuery();

  console.log(data);

  return (
    <Box className="flex flex-col sm:flex-row gap-4 mb-4">
      <FormControl fullWidth>
        <InputLabel id="country-label">Country</InputLabel>
        {/* <Select
          labelId="country-label"
          value={selectedCountry}
          label="Country"
          onChange={handleCountryChange}
        >
          <MenuItem value="">All</MenuItem>
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select> */}
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="ingredient-label">Ingredient</InputLabel>
        {/* <Select
          labelId="ingredient-label"
          value={selectedIngredient}
          label="Ingredient"
          onChange={handleIngredientChange}
        >
          <MenuItem value="">All</MenuItem>
          {ingredients.map((ingredient) => (
            <MenuItem key={ingredient} value={ingredient}>
              {ingredient}
            </MenuItem>
          ))}
        </Select> */}
      </FormControl>
    </Box>
  );
};

export default RecipeFilters;
