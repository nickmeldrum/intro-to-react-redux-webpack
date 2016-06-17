'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import documentStore from './reducers/document.js';

import Document from './containers/document.js';

let store = createStore(documentStore)

ReactDOM.render(
    <Provider store={store}>
        <Document />
    </Provider>
, window.document.getElementById('app'));
