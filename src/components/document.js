'use strict';

import React from 'react';

import GetName from './get-name.js';
import Parts from './parts.js';

import {add} from '../api/part.js';
import {rename} from '../api/document.js';

export default React.createClass({
    getInitialState: function() {
        return {parts: [], renaming: false, name: ''};
    },
    addPart: function(name) {
        add(name).then(newPart => {
            const newPartsList = this.state.parts.concat([newPart]);
            this.setState({parts: newPartsList});
        });
    },
    showRenameDocument: function() {
        this.setState({renaming: true});
    },
    renameDocument: function(name) {
        rename(name).then(document => {
            this.setState({name: document.name, renaming: false});
        });
    },
    render: function() {
        return (
            <div>
                <h1 onClick={this.showRenameDocument} style={{cursor: 'pointer'}}>
                {this.state.name ? `Document: ${this.state.name}` : 'My document!'}
                </h1>
                {this.state.renaming ?  <GetName label="Rename Document" update={this.renameDocument} /> : ''}
                <GetName label="Add Part" update={this.addPart} />
                <Parts parts={this.state.parts} />
            </div>
        );
    }
});
