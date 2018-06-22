import {
  FETCH_FILM_DATA,
  FETCH_FILM_DATA_SUCCEEDED,
  FETCH_FILM_DATA_FAILED,
  FETCH_PERSON_DATA,
  FETCH_PERSON_DATA_SUCCEEDED,
  FETCH_PERSON_DATA_FAILED
} from "./actionTypes";

export const fetchFilmData = () => ({
  type: FETCH_FILM_DATA
});

export const fetchFilmDataSucceeded = characters => ({
  type: FETCH_FILM_DATA_SUCCEEDED,
  characters
});

export const fetchFilmDataFailed = (error) => ({
  type: FETCH_FILM_DATA_FAILED,
  error
});

export const fetchPersonDataAction = url => ({
  type: FETCH_PERSON_DATA,
  url
});

export const fetchPersonDataSucceeded = personData => ({
  type: FETCH_FILM_DATA_SUCCEEDED,
  personData
});

export const fetchPersonDataFailed = error => ({
  type: FETCH_FILM_DATA_FAILED,
  error
});
