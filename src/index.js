'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import documentStore from './reducers/document.js';

import Document from './containers/document.js';

let store = createStore(documentStore, {parts: []}, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
    <Provider store={store}>
        <Document />
    </Provider>
, window.document.getElementById('app'));
