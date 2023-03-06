import { MainSaga as SearchFormSaga } from '@components/SearchForm/model/saga';
import { all } from 'redux-saga/effects';

function* rootSaga() {
    yield all([SearchFormSaga()]);
}

export default rootSaga;
