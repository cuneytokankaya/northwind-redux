import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

/*
state : merkezi storage'dır. seçili kategoriyi global de tutacak.
action: action içerisinde seçilen kategori gelir
*/
export default function categoryListReducer(
  state = initialState.categories,
  action
) {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCES:
      return action.payload;
    default:
      return state;
  }
}
