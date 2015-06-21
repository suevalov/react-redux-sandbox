/* global describe, it, sinon, expect */

import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import { Button } from 'components/index';

describe('Button', () => {

    it('should output a button', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button>
                Title
            </Button>
        );
        expect(React.findDOMNode(instance).nodeName).toEqual('BUTTON');
        expect(1).toEqual(1);
    });

    it('should output a component with button classes', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button componentClass='input'>
                Title
            </Button>
        );

        let domNode = React.findDOMNode(instance);
        expect(domNode.nodeName).toEqual('INPUT');
        expect(domNode.getAttribute('class')).toEqual('btn btn-default');
    });

    it('should have type="button" by default', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.getAttribute('type')).toEqual('button');
    });

    it('should override type if it is passed', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button type='submit'>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.getAttribute('type')).toEqual('submit');
    });

    it('should output an anchor if called with a href', () => {
        let href = '/url';
        let instance = ReactTestUtils.renderIntoDocument(
            <Button href={href}>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.nodeName).toEqual('A');
        expect(domNode.getAttribute('href')).toEqual(href);
    });

    it('should output an input if called with a href and an input component', () => {
        let href = '/url';
        let instance = ReactTestUtils.renderIntoDocument(
            <Button href={href} componentClass='input'>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.nodeName).toEqual('INPUT');
        expect(domNode.getAttribute('href')).toEqual(href);
    });

    it('should output an anchor if called with a target', () => {
        let target = '_blank';
        let instance = ReactTestUtils.renderIntoDocument(
            <Button target={target}>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.nodeName).toEqual('A');
        expect(domNode.getAttribute('target')).toEqual(target);
    });

    it('should be disabled', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button disabled>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.disabled).toEqual(true);
    });

    it('should be disabled link', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button disabled href='#'>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.className).toContain('disabled');
    });

    it('should have block class', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button block>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.className).toContain('btn-block');
    });

    it('should have passed theme', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button theme='danger'>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.className).toContain('btn-danger');
        expect(domNode.className).not.toContain('btn-default');
    });

    it('should honour additional classes', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button className='someAdditionalClass' theme='warning'>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.className).toContain('btn');
        expect(domNode.className).toContain('btn-warning');
        expect(domNode.className).toContain('someAdditionalClass');
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
            let domNode = React.findDOMNode(instance);
            expect(domNode.className).toContain(`btn-${item[1]}`);
        });

    });

    it('should be active', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button active>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.className).toContain('active');
    });

    it('should be outline', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button outline>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.className).toContain('btn-outline');
    });

    it('should be circle', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button circle>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.className).toContain('btn-circle');
    });

    it('should be rounded', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button rounded>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.className).toContain('btn-rounded');
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
        let domNode = React.findDOMNode(instance);
        ReactTestUtils.Simulate.click(domNode);
    });

    it('should not call onClick callback if button is disabled', () => {
        let doneCallback = sinon.spy();
        let instance = ReactTestUtils.renderIntoDocument(
            <Button href='#' disabled onClick={doneCallback}>
                Title
            </Button>
        );
        ReactTestUtils.Simulate.click(React.findDOMNode(instance));
        expect(doneCallback.called).toEqual(false);
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

        ReactTestUtils.Simulate.focus(React.findDOMNode(instance));

    });

    it('should not call onFocus callback if button is disabled', () => {

        let doneCallback = sinon.spy();

        let instance = ReactTestUtils.renderIntoDocument(
            <Button disabled onFocus={doneCallback}>
                Title
            </Button>
        );

        ReactTestUtils.Simulate.focus(React.findDOMNode(instance));

        expect(doneCallback.called).toEqual(false);

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

        ReactTestUtils.Simulate.blur(React.findDOMNode(instance));
    });

    it('should not call onBlur callback if button is disabled', () => {
        let doneCallback = sinon.spy();

        let instance = ReactTestUtils.renderIntoDocument(
            <Button disabled onBlur={doneCallback}>
                Title
            </Button>
        );

        ReactTestUtils.Simulate.blur(React.findDOMNode(instance));
        expect(doneCallback.called).toEqual(false);
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

        ReactTestUtils.Simulate.mouseUp(React.findDOMNode(instance));
    });

    it('should not call onMouseUp callback if button is disabled', () => {
        let doneCallback = sinon.spy();

        let instance = ReactTestUtils.renderIntoDocument(
            <Button href='#' disabled onMouseUp={doneCallback}>
                Title
            </Button>
        );

        ReactTestUtils.Simulate.mouseUp(React.findDOMNode(instance));
        expect(doneCallback.called).toEqual(false);
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

        ReactTestUtils.Simulate.mouseDown(React.findDOMNode(instance));
    });

    it('should not call onMouseDown callback if button is disabled', () => {
        let doneCallback = sinon.spy();

        let instance = ReactTestUtils.renderIntoDocument(
            <Button href='#' disabled onMouseDown={doneCallback}>
                Title
            </Button>
        );

        ReactTestUtils.Simulate.mouseDown(React.findDOMNode(instance));
        expect(doneCallback.called).toEqual(false);
    });

    it('should be 3d-dim', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button dim>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.className).toContain('btn-dim');
    });

    it('should be min-width', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button minWidth>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.className).toContain('btn-min-width');
    });

    it('should be min-width style with exactly width', () => {

        let width = 199;
        let instance = ReactTestUtils.renderIntoDocument(
            <Button minWidth={width}>
                Title
            </Button>
        );
        let domNode = React.findDOMNode(instance);
        expect(domNode.className).not.toContain('btn-min-width');
        expect(domNode.getAttribute('style')).toContain(`min-width:${width}px;`);
    });

});
