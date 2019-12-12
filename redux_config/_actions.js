export const TOGGLE_FAVOURITES = "TOGGLE_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const RESET_FILTER = "RESET_FILTER";
export const UPDATE_FILTER = "UPDATE_FILTERS";

export const meal_filters = {
  isGlutenFree: false,
  isVegan: false,
  isVegetarian: false,
  isLactoseFree: false
};

export const toggle_favourites = meal_id => {
  return {
    type: TOGGLE_FAVOURITES,
    meal_id: meal_id
  };
};

export const update_filters = filter_settings => {
  return {
    type: UPDATE_FILTER,
    filters: filter_settings
  };
};
