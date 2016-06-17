'use strict';

import React from 'react';
import AddPart from './add-part.js';
import RenameDocument from './rename-document.js';
import Parts from './parts.js';

export default React.createClass({
    getInitialState: function() {
        return {parts: [], renaming: false, name: ''};
    },
    addPart: function(name) {
        const newPartsList = this.state.parts.concat([{name, id: this.state.parts.length + 1}]);
        this.setState({parts: newPartsList});
    },
    showRenameDocument: function() {
        this.setState({renaming: true});
    },
    renameDocument: function(name) {
        this.setState({name, renaming: false});
    },
    render: function() {
        return (
            <div>
                <h1 onClick={this.showRenameDocument} style={{cursor: 'pointer'}}>
                {this.state.name ? `Document: ${this.state.name}` : 'My document!'}
                </h1>
                {this.state.renaming ?  <RenameDocument renameDocument={this.renameDocument} /> : ''}
                <AddPart addPart={this.addPart} />
                <Parts parts={this.state.parts} />
            </div>
        );
    }
});
