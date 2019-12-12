import { UPDATE_FILTER, meal_filters } from "./_actions";

export default function filter(meals, state, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      const appliedFilters = action.filters;
      const keys = Object.keys(appliedFilters);
      const filteredMeals = meals.filter(meal => {
        for (let key in appliedFilters) {
          if (!meal[key] && appliedFilters[key]) {
            return false;
          }
        }
        return true;
      });
      return filteredMeals;
    default:
      return Object.assign([], [...meals]);
  }
}
