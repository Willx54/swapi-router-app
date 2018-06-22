import { call, put, takeLatest, select } from "redux-saga/effects";
import { fetchFilmData } from "./api";
import {
  FETCH_FILM_DATA,
  FETCH_FILM_DATA_SUCCEEDED,
  FETCH_FILM_DATA_FAILED,
  FETCH_PERSON_DATA,
  FETCH_PERSON_DATA_SUCCEEDED,
FETCH_PERSON_DATA_FAILED

} from "../store/actionTypes";
import { charactersSelect } from "../store/selectors";  

function* fetchFilmDataFlow() {
  try {
    const characters = yield call(fetchFilmData);
    yield put({ type: FETCH_FILM_DATA_SUCCEEDED, characters });
  } catch (error) {
    yield put({ type: FETCH_FILM_DATA_FAILED, error });
  }
}

function* charactersSucceededFlow() {
  const characters = yield select(charactersSelect);
  for(let i = 0; i < characters.length; i++) {
    //console.log('item: ', characters[i]);
    yield put({ type: FETCH_PERSON_DATA, url: characters[i] });
  }
  // yield put({ type: FETCH_PERSON_DATA, url: 'TEST' });
}

// function* fetchPersonDataFlow(action) {
//   console.log('Fetch person data flow');
//   try {
//     const personData = yield call(fetchPerson, action.url);
//     yield put({ type: FETCH_PERSON_DATA_SUCCEEDED, personData });
//   } catch (error) {
//     yield put({ type: FETCH_PERSON_DATA_FAILED, error });
//   }
// }


function* swapiAppSaga() {
  yield takeLatest(FETCH_FILM_DATA, fetchFilmDataFlow);
  // yield takeLatest(FETCH_FILM_DATA_SUCCEEDED, charactersSucceededFlow);
  // yield takeLatest(FETCH_PERSON_DATA, fetchPersonDataFlow);
}

export default swapiAppSaga;
