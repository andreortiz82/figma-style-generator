// import * as React from 'react';
import React, {useState, useEffect} from 'react';
import {copyToClipboard} from '../utils';

declare function require(path: string): any;

const App = ({}) => {
    const [tokens, setTokens] = useState([]);
    const [product, setProduct] = useState('');
    const [mode, setMode] = useState('');

    useEffect(() => {
        // This is how we read messages sent from the plugin controller
        window.onmessage = (event) => {
            const {type, message} = event.data.pluginMessage;
            if (type === 'styles-generated') {
                setTokens(message);
            }
        };
    }, []);

    const requestTokens = (product, mode) => {
        parent.postMessage(
            {
                pluginMessage: {
                    product: product,
                    mode: mode,
                    type: 'request-tokens',
                },
            },
            '*'
        );
    };

    return (
        <div>
            <div className="theme-controls">
                <select onChange={(e) => setProduct(e.target.value)}>
                    <option value={'ost-site'}>Site</option>
                    <option value={'ost-sponsor'}>Sponsor</option>
                    <option value={'ost-admin'}>Admin</option>
                </select>
                <select onChange={(e) => setMode(e.target.value)}>
                    <option value={'light'}>Light</option>
                    <option value={'dark'}>Dark</option>
                </select>
                <button onClick={() => requestTokens(product, mode)}>Get Tokens</button>
            </div>

            <textarea defaultValue={tokens} />
            <button onClick={() => copyToClipboard(tokens)}>Copy to Clipboard</button>
        </div>
    );
};

export default App;
