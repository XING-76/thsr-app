import searchForm from '@components/SearchForm/model';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
    searchForm
});

interface action {
    type: string;
    payload?: any;
}

const rootReducer = (state: any, action: action) => {
    switch (action.type) {
        case 'LOGOUT': {
            return appReducer(undefined, action);
        }
        default:
            return appReducer(state, action);
    }
};

export type storesType = ReturnType<typeof rootReducer>;
export default rootReducer;
