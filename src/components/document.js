'use strict';

import React from 'react';
import AddPart from './add-part.js';
import Parts from './parts.js';

export default React.createClass({
    getInitialState: function() {
        return {parts: []};
    },
    addPart: function(name) {
        const newPartsList = this.state.parts.concat([{name, id: this.state.parts.length + 1}]);
        this.setState({parts: newPartsList});
    },
    render: function() {
        return (
            <div>
                <h1>My document!</h1>
                <AddPart addPart={this.addPart} />
                <Parts parts={this.state.parts} />
            </div>
        );
    }
});
