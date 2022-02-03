import './wdyr';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

// type Tree = { [id: number]: string };

// let tree: Tree = {};

// tree = { ...tree, ...{ [1]: 'uno' } };
// tree = { ...tree, ...{ [2]: 'dos' } };
// const length = Object.keys(tree).length;

// (Object.keys(tree) as unknown as number[]).forEach((key:number) => {
//     console.log(key)
//     if ((key as number) === 2) {
//         tree = { ...tree, ... { [key]: "2" } }
//     }
// })

// Object.keys(tree).forEach((key) => {
//     console.log(key)
//     if (key === 'two') {
//         tree = { ...tree, ... { [key]: "2" } }
//     }
// })

// delete tree[2]

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);