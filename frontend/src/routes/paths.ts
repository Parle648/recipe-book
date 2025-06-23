export const ROUTING_PATHS = {
  ROOT: "/",
  RECIPE_PAGE: "recipe/:id",
  DYNAMIC_RECIPE_PAGE: (id: number) => `recipe/${id}`,
};
