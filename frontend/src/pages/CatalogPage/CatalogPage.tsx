import type { FC } from "react";
import RecipeCardList from "../../components/RecipeCardList/RecipeCardList";
import RecipeFilters from "../../components/Filters/RecipeFilters/RecipeFilters";

const CatalogPage: FC = () => {
  return (
    <>
      <RecipeFilters />
      <RecipeCardList />
    </>
  );
};

export default CatalogPage;
