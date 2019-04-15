export const counterInitialState = {
    count: 0,
};

export const counterReducer = (state, action) => {
    switch (action.type) {
        case `INCREASE`:
            return {
                count: state.count + 1
            };
        case `DECREASE`:
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
};
