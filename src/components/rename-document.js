'use strict';

import React from 'react';

export default React.createClass({
    getInitialState: function() {
        return {name: ''};
    },
    onChange: function(e) {
        this.setState({name: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.renameDocument(this.state.name);
        this.setState({name: ''});
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Rename document:</label>
                <input type="text" value={this.state.name} onChange={this.onChange} />
            </form>
        );
    }
});
