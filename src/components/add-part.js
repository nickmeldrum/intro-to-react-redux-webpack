import React from 'react';

export default React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.addPart(this.refs.name.value);
        this.refs.name.value = "";
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>add part:</label>
                <input type="text" ref="name" />
            </form>
        );
    }
});
