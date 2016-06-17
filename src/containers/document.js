import { connect } from 'react-redux';

import Document from '../components/document.js';
import { renameDocument } from '../actions/document.js';

function mapStateToProps(state) {
    return {
        name: state.name
    };
}

function mapDispatchToProps(dispatch) {
    return {
        renameDocument: (name) => {
            dispatch(renameDocument(name));
        }
    };
}

const DocumentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

export default DocumentContainer;
