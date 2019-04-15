import React, { useState } from 'react';
import { storeConsumers } from '../hooks/storeConsumers';

export const Message = () => {
    const [inputValue, setInputValue] = useState(``);
    const [, dispatch] = storeConsumers.useMessageStore();

    return (
        <div>
            <input onChange={(e) => setInputValue(e.currentTarget.value)} type="text" placeholder="Enter message..." />
            <button onClick={() => dispatch({ type: `SET_MESSAGE`, payload: inputValue })}>
                Send
            </button>
        </div>
    );
};
