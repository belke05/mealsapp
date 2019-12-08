import { RESET_FILTER,UPDATE_FILTER, meal_filters } from "./_actions";



export default filter(meals, state, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      const keys = action.filters.filter((filterkeys) => {
        meal_filters.keys().includes(filterkeys)? true : false
      })
      let new_filters = meal_filters
      keys.forEach(key => {
        new_filters[key] = true
      });
      meals.filter(meal => {
        let check = true 
        action.filters.forEach(filter => {
          check
          return meal[filter]? none : check = false
        })
      })
      return new_filters
    case RESET_FILTER:
      return Object.assign([],[...meals])
    default:
      return Object.assign([],[...meals])
  }
}