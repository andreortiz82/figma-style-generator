// import * as React from 'react';
import React, {useState, useEffect} from 'react';
import {copyToClipboard} from '../utils';

declare function require(path: string): any;

const App = ({}) => {
    const [tokens, setTokens] = useState([]);

    useEffect(() => {
        // This is how we read messages sent from the plugin controller
        window.onmessage = (event) => {
            const {type, message} = event.data.pluginMessage;
            if (type === 'styles-generated') {
                setTokens(message);
            }
        };
    }, []);

    return (
        <div>
            <button className="copy-button" onClick={() => copyToClipboard(tokens)}>
                Copy to Clipboard
            </button>
            <textarea style={{width: '100%', height: '80%'}} defaultValue={tokens} />
        </div>
    );
};

export default App;
