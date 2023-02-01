// import * as React from 'react';
import React, {useState, useEffect} from 'react';
import {copyToClipboard} from '../utils';

declare function require(path: string): any;

const App = ({}) => {
    const [tokens, setTokens] = useState([]);
    const [product, setProduct] = useState('ost-site');
    const [mode, setMode] = useState('light');
    const [createLocalStyles, setCreateLocalStyles] = useState(false);
    const [format, setFormat] = useState('css');

    useEffect(() => {
        // This is how we read messages sent from the plugin controller
        window.onmessage = (event) => {
            const {type, message} = event.data.pluginMessage;
            if (type === 'styles-generated') {
                setTokens(message);
            }
        };
    }, []);

    const requestTokens = (product, mode, createLocalStyles, format) => {
        parent.postMessage(
            {
                pluginMessage: {
                    product: product,
                    mode: mode,
                    createLocalStyles: createLocalStyles,
                    format: format,
                    type: 'request-tokens',
                },
            },
            '*'
        );
    };

    return (
        <main>
            <div className="theme-controls">
                <div className="options">
                    <select onChange={(e) => setProduct(e.target.value)}>
                        <option value={'ost-site'}>Site</option>
                        <option value={'ost-sponsor'}>Sponsor</option>
                        <option value={'ost-admin'}>Admin</option>
                        <option value={'wire-boi'}>Wire Boi</option>
                    </select>
                    <select onChange={(e) => setMode(e.target.value)}>
                        <option value={'light'}>Light</option>
                        <option value={'dark'}>Dark</option>
                    </select>
                    <select onChange={(e) => setFormat(e.target.value)}>
                        <option value={'css'}>CSS</option>
                        <option value={'json'}>JSON</option>
                        <option value={'list'}>List</option>
                    </select>
                    <label>
                        <input
                            onChange={() => setCreateLocalStyles(!createLocalStyles)}
                            checked={createLocalStyles}
                            type="checkbox"
                        />
                        Create local styles
                    </label>
                </div>
                <div className="action">
                    <button onClick={() => requestTokens(product, mode, createLocalStyles, format)}>Get Tokens</button>
                </div>
            </div>

            <textarea placeholder="Choose a theme configuration" defaultValue={tokens} />

            <div className="theme-controls">
                <div className="options">
                    <button onClick={() => copyToClipboard(tokens)}>Copy to Clipboard</button>
                </div>
            </div>
        </main>
    );
};

export default App;
