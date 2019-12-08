import { TOGGLE_FAVOURITES } from "./_actions";

export default function favourites(meals, state, action) {
  switch (action.type) {
    case TOGGLE_FAVOURITES:
      const index = state.findIndex(meal => meal.id === action.meal_id);
      let updated_favourites = Object.assign([], [...state]);
      index >= 0
        ? updated_favourites.splice(index, 1)
        : updated_favourites.push(
            meals.find(meal => meal.id === action.meal_id)
          );
      return updated_favourites;
    default:
      return Object.assign([], [...state]);
  }
}
