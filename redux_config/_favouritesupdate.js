import { UPDATE_FAVOURITES } from "./_actions";

export default function favourites(state, action) {
  switch (action.type) {
    case UPDATE_FAVOURITES:
      return;
      break;
    default:
      Object.assign([], [...state]);
  }
}
