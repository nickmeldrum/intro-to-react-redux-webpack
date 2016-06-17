import { RENAME_DOCUMENT } from '../actions/document.js';

const initialState = {
    name: '',
    parts: []
};

export default function document(state = initialState, action) {
    switch (action.type) {
        case RENAME_DOCUMENT :
            return Object.assign({}, state, {name: action.name});
        default :
            return state;
    }
};
