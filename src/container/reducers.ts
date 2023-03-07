import mainPage from '@/container/MainPage/model';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
    mainPage
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
