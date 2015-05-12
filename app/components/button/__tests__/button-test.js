'use strict';

/* global describe, it, sinon */

import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import { Button } from 'components/index';

describe('Button', () => {

    it('should output a button', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button>
                Title
            </Button>
        );
        expect(instance.getDOMNode().nodeName).to.equal('BUTTON');
        expect(1).to.equal(1);
    });

    it('should output a component with button classes', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button componentClass='input'>
                Title
            </Button>
        );
        expect(instance.getDOMNode().nodeName).to.equal('INPUT');
        expect(instance.getDOMNode().getAttribute('class')).to.equal('btn btn-default');
    });

    it('should have type="button" by default', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button>
                Title
            </Button>
        );
        expect(instance.getDOMNode().getAttribute('type')).to.equal('button');
    });

    it('should override type if it is passed', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button type='submit'>
                Title
            </Button>
        );
        expect(instance.getDOMNode().getAttribute('type')).to.equal('submit');
    });

    it('should output an anchor if called with a href', () => {
        let href = '/url';
        let instance = ReactTestUtils.renderIntoDocument(
            <Button href={href}>
                Title
            </Button>
        );
        expect(instance.getDOMNode().nodeName).to.equal('A');
        expect(instance.getDOMNode().getAttribute('href')).to.equal(href);
    });

    it('should output an input if called with a href and an input component', () => {
        let href = '/url';
        let instance = ReactTestUtils.renderIntoDocument(
            <Button href={href} componentClass='input'>
                Title
            </Button>
        );
        expect(instance.getDOMNode().nodeName).to.equal('INPUT');
        expect(instance.getDOMNode().getAttribute('href')).to.equal(href);
    });

    it('should output an anchor if called with a target', () => {
        let target = '_blank';
        let instance = ReactTestUtils.renderIntoDocument(
            <Button target={target}>
                Title
            </Button>
        );
        expect(instance.getDOMNode().nodeName).to.equal('A');
        expect(instance.getDOMNode().getAttribute('target')).to.equal(target);
    });

    it('should be disabled', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button disabled>
                Title
            </Button>
        );
        expect(instance.getDOMNode().disabled).to.equal(true);
    });

    it('should be disabled link', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button disabled href='#'>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).to.contain('disabled');
    });

    it('should have block class', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button block>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).to.contain('btn-block');
    });

    it('should have passed theme', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button theme='danger'>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).to.contain('btn-danger');
        expect(instance.getDOMNode().className).to.not.contain('btn-default');
    });

    it('should honour additional classes', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button className='someAdditionalClass' theme='warning'>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).to.contain('btn');
        expect(instance.getDOMNode().className).to.contain('btn-warning');
        expect(instance.getDOMNode().className).to.contain('someAdditionalClass');
    });

    it('should have passed size', () => {

        let sizes = [
            ['xsmall', 'xs'],
            ['small', 'sm'],
            ['large', 'lg']
        ];

        sizes.forEach((item) => {
            let instance = ReactTestUtils.renderIntoDocument(
                <Button size={item[0]}>
                    Title
                </Button>
            );
            expect(instance.getDOMNode().className).to.contain(`btn-${item[1]}`);
        });

    });

    it('should be active', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button active>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).to.contain('active');
    });

    it('should be outline', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button outline>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).to.contain('btn-outline');
    });

    it('should be circle', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button circle>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).to.contain('btn-circle');
    });

    it('should be rounded', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button rounded>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).to.contain('btn-rounded');
    });


    it('should call onClick callback', (done) => {
        let doneCallback = () => {
            done();
        };
        let instance = ReactTestUtils.renderIntoDocument(
            <Button onClick={doneCallback}>
                Title
            </Button>
        );
        ReactTestUtils.Simulate.click(instance.getDOMNode());
    });

    it('should not call onClick callback if button is disabled', () => {
        let doneCallback = sinon.spy();
        let instance = ReactTestUtils.renderIntoDocument(
            <Button href='#' disabled onClick={doneCallback}>
                Title
            </Button>
        );

        ReactTestUtils.Simulate.click(instance.getDOMNode());
        expect(doneCallback.called).to.equal(false);
    });

    it('should call onFocus callback', (done) => {

        let doneCallback = () => {
            done();
        };

        let instance = ReactTestUtils.renderIntoDocument(
            <Button onFocus={doneCallback}>
                Title
            </Button>
        );

        ReactTestUtils.Simulate.focus(instance.getDOMNode());

    });

    it('should not call onFocus callback if button is disabled', () => {

        let doneCallback = sinon.spy();

        let instance = ReactTestUtils.renderIntoDocument(
            <Button disabled onFocus={doneCallback}>
                Title
            </Button>
        );

        ReactTestUtils.Simulate.focus(instance.getDOMNode());

        expect(doneCallback.called).to.equal(false);

    });

    it('should call onBlur callback', (done) => {
        let doneCallback = () => {
            done();
        };

        let instance = ReactTestUtils.renderIntoDocument(
            <Button onBlur={doneCallback}>
                Title
            </Button>
        );

        ReactTestUtils.Simulate.blur(instance.getDOMNode());
    });

    it('should not call onBlur callback if button is disabled', () => {
        let doneCallback = sinon.spy();

        let instance = ReactTestUtils.renderIntoDocument(
            <Button disabled onBlur={doneCallback}>
                Title
            </Button>
        );

        ReactTestUtils.Simulate.blur(instance.getDOMNode());
        expect(doneCallback.called).to.equal(false);
    });

    it('should call onMouseUp callback', (done) => {
        let doneCallback = () => {
            done();
        };

        let instance = ReactTestUtils.renderIntoDocument(
            <Button onMouseUp={doneCallback}>
                Title
            </Button>
        );

        ReactTestUtils.Simulate.mouseUp(instance.getDOMNode());
    });

    it('should not call onMouseUp callback if button is disabled', () => {
        let doneCallback = sinon.spy();

        let instance = ReactTestUtils.renderIntoDocument(
            <Button href='#' disabled onMouseUp={doneCallback}>
                Title
            </Button>
        );

        ReactTestUtils.Simulate.mouseUp(instance.getDOMNode());
        expect(doneCallback.called).to.equal(false);
    });

    it('should call onMouseDown callback', (done) => {
        let doneCallback = () => {
            done();
        };

        let instance = ReactTestUtils.renderIntoDocument(
            <Button onMouseDown={doneCallback}>
                Title
            </Button>
        );

        ReactTestUtils.Simulate.mouseDown(instance.getDOMNode());
    });

    it('should not call onMouseDown callback if button is disabled', () => {
        let doneCallback = sinon.spy();

        let instance = ReactTestUtils.renderIntoDocument(
            <Button href='#' disabled onMouseDown={doneCallback}>
                Title
            </Button>
        );

        ReactTestUtils.Simulate.mouseDown(instance.getDOMNode());
        expect(doneCallback.called).to.equal(false);
    });

    it('should be 3d-dim', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button dim>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).to.contain('btn-dim');
    });

    it('should be min-width', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button minWidth>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).to.contain('btn-min-width');
    });

    it('should be min-width style with exactly width', () => {

        let width = 199;
        let instance = ReactTestUtils.renderIntoDocument(
            <Button minWidth={width}>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).to.not.contain('btn-min-width');
        expect(instance.getDOMNode().getAttribute('style')).to.contain(`min-width:${width}px;`);
    });

});
