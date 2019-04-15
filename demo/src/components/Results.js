import React from 'react';
import { storeConsumers } from '../hooks/storeConsumers';

export const Results = () => {
    const [{ count }] = storeConsumers.useCounterStore();
    const [{ message }] = storeConsumers.useMessageStore();

    return (
        <div>
            Count: {count}
            &nbsp;
            Last message: {message}
        </div>
    )
};
