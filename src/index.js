import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, StoreProviders } from '../../src'
import { loggingMiddleware } from './middlewares/loggingMiddleware';
import { reducersConfig } from './reducers/reducersConfig';
import { Counter } from './components/Counter';
import { Results } from './components/Results';
import { Message } from './components/Message';

const store = createStore(reducersConfig, [loggingMiddleware]);

const Demo = () => {
    return (
        <StoreProviders store={store}>
            <h1>store-providers-hooks Demo</h1>
            <Counter />
            <br />
            <Message />
            <br />
            <Results />
        </StoreProviders>
    )
};

render(<Demo />, document.querySelector('#demo'))
