import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IMeal {
  strMeal: string;
  strMealThumb: string;
  idMeal: number;
}

interface IInitialState {
  meals: IMeal[];
  currentMeal?: IMeal;
}

const initialState: IInitialState = {
  meals: [],
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    setMeals: (store, action: PayloadAction<IMeal[]>) => {
      store.meals = action.payload;
    },
    setMeal: (store, action: PayloadAction<IMeal>) => {
      store.currentMeal = action.payload;
    },
  },
});

export default mealsSlice.reducer;
export const { setMeals, setMeal } = mealsSlice.actions;
