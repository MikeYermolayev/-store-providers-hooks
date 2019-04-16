import { counterInitialState, counterReducer } from './counterReducer';
import { messageReducer, messageInitialState } from './messageReducer';

export const reducersConfig = {
    counter: {
        reducer: counterReducer,
        initialState: counterInitialState
    },
    message: {
        reducer: messageReducer,
        initialState: messageInitialState,
    },
};
