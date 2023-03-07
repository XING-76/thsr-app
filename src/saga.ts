import { MainSaga as SearchFormSaga } from '@/container/MainPage/model/saga';
import { all } from 'redux-saga/effects';

function* rootSaga() {
    yield all([SearchFormSaga()]);
}

export default rootSaga;
