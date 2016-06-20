import { RENAME_DOCUMENT } from '../actions/document.js';
import { ADD_PART } from '../actions/part.js';

const initialState = {
    name: '',
    parts: []
};

export default function document(state = initialState, action) {
    switch (action.type) {
        case RENAME_DOCUMENT :
            return Object.assign({}, state, {name: action.name});
        case ADD_PART :
            const newPartsList = state.parts.concat([{id: Date.now(), name: action.name}]);
            return Object.assign({}, state, {parts: newPartsList});
        default :
            return state;
    }
};
