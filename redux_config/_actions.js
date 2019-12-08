export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const RESET_FILTER = "RESET_FILTER";
export const UPDATE_FILTER = "UPDATE_FILTERS";

export const meal_filters = {
  isGlutenFree: false,
  isVegan: false,
  isVegetarian: false,
  isLactoseFree: false
};

export const add_favourites = meal_id => {
  return {
    type: ADD_FAVOURITES,
    meal_id: meal_id
  };
};

export const remove_favourites = meal_id => {
  return {
    type: REMOVE_FAVOURITES,
    meal_id: meal_id
  };
};

export const reset_filters = filter_indexes => {
  return {
    type: UPDATE_FILTER,
    filters: filter_indexes
  };
};

export const update_filters = filter_indexes => {
  return {
    type: UPDATE_FILTER,
    filters: filter_indexes
  };
};
