export const loggingMiddleware = (next, name = ``) =>
    (state, action) => {
        console.groupCollapsed(`[State update]: ${name}`);
        console.log(`PREV STATE:`, state);
        console.log(`ACTION:`, action);

        const newState = next(state, action);

        console.log(`NEW STATE:`, newState);
        console.groupEnd();

        return newState;
    };
