import React from 'react';
import { storeConsumers } from '../hooks/storeConsumers';

export const Counter = () => {
    const [, dispatch] = storeConsumers.useCounterStore();

    return (
        <div>
            <button onClick={() => dispatch({ type: `INCREASE` })}>
                Increase
            </button>
            <button onClick={() => dispatch({ type: `DECREASE` })}>
                Decrease
            </button>
        </div>
    );
};
