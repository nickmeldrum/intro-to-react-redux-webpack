'use strict';

import chai from 'chai';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Parts from '../../src/components/parts.js';

function shallowRender(component) {
    const renderer = createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
}

describe('components', function() {
    describe('Parts', function() {
        it('shallow rendering: heading and empty list if no parts passed in', function() {
            const component = shallowRender(<Parts parts={[]} />);

            expect(component.props.children.length).to.equal(2);
            expect(component.props.children[0].type).to.equal('h2');
            expect(component.props.children[1].type).to.equal('ul');
            expect(component.props.children[1].props.children.length).to.equal(0);
        });
    });
});

