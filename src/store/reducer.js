import {
  FETCH_FILM_DATA,
  FETCH_FILM_DATA_SUCCEEDED,
  FETCH_FILM_DATA_FAILED,
  FETCH_PERSON_DATA,
  FETCH_PERSON_DATA_SUCCEEDED,
  FETCH_PERSON_DATA_FAILED
} from "./actionTypes";

const initialState = {
  characters: [],
  loading: false,
  error: "",
  people: [],
  modules: []
};

const swapiAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILM_DATA:
      return {
        ...state,
        loading: true
      };
    case FETCH_FILM_DATA_SUCCEEDED:
      return {
        ...state,
        loading: false,
        modules: action.characters
      };
    case FETCH_FILM_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case FETCH_PERSON_DATA:
      return {
        ...state,
        loading: true
      };
    case FETCH_PERSON_DATA_SUCCEEDED:
      return {
        ...state,
        loading: false,
        people: [...state.people, action.personData]
      };
    case FETCH_PERSON_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default swapiAppReducer;
