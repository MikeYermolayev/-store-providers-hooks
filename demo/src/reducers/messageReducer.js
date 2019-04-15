export const messageInitialState = {
    message: ``,
};

export const messageReducer = (state, action) => {
    switch (action.type) {
        case `SET_MESSAGE`:
            return {
                message: action.payload,
            };
        default:
            return state;
    }
};
