// import { RESET_FILTER, UPDATE_FILTER, meal_filters } from "./_actions";

// export default function filter(meals, state, action) {}
// switch (action.type) {
//   case UPDATE_FILTER:
//     return meals.filter(meal => {
//       let check = true;
//       const filterkeys = action.filters.keys();
//       filterkeys.forEach(key => {
//         if (action.filters[key] === true) {
//           if (meal[key] === false) {
//             check = false;
//             return;
//           }
//         }
//       });
//       return check;
//     });
//   case RESET_FILTER:
//     return Object.assign([], [...meals]);
//   default:
//     return Object.assign([], [...meals]);
// }
