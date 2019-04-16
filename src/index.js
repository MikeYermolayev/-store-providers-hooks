import React, {
    createContext, useContext, useReducer, type Node, type Context,
} from 'react';

export const createStore = (reducers, middlewares) =>
    Object.entries(reducers).reduce((store, [key, { initialState, reducer }]) => {
        store[key] = {
            context: createContext(),
            reducer: middlewares.reduce((next, middleware) => middleware(next, key), reducer),
            initialState,
        };
        return store;
    }, {});

const Provider = ({
    nodeToWrap, context, reducer, initialState,
}) => (
        <context.Provider value={useReducer(reducer, initialState)}>
            {nodeToWrap}
        </context.Provider>
    );

const StoreContext = createContext();

export const StoreProviders = ({ store, children }) => (
    <StoreContext.Provider value={store}>
        {
            Object.entries(store)
                .reduce((acc, [key, { context, reducer, initialState }]) =>
                    (
                        <Provider
                            key={key}
                            nodeToWrap={acc}
                            context={context}
                            reducer={reducer}
                            initialState={initialState}
                        />
                    ), children)
        }
    </StoreContext.Provider>
);

export const useStoreConsumer = (key) => {
    const store = useContext(StoreContext);
    return useContext(store[key].context);
};
