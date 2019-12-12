import { Meals } from "../data/test_data";
import filters from "./_filterupdates";
import favourites from "./_favouritesupdate";

const StartState = {
  allmeals: Meals,
  filteredmeals: Meals,
  favourites: []
};

// when redux starts up it will run first time with this initial state
// export default function meals_app(state = StartState, action) {
//   return {
//     allmeals: Object.assign([], [...state.allmeals]),
//     filteredmeals: filters(state.allmeals, state.filters, action),
//     favourites: favourites(state.favourites, action)
//   };
// }

export const mealsReducer = (state = StartState, action) => {
  return {
    allmeals: Object.assign([], [...state.allmeals]),
    filteredmeals: filters(state.allmeals, state.filteredmeals, action),
    favourites: favourites(state.allmeals, state.favourites, action)
  };
};
