'use strict';

/*global describe, it */

import React from 'react';
import ReactTestUtils from '../../../../node_modules/react/lib/ReactTestUtils';
import expect from 'expect';
import Button from '../button';

describe('Button', () => {

    it('should output a button', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button>
                Title
            </Button>
        );
        expect(instance.getDOMNode().nodeName).toEqual('BUTTON');
        expect(1).toEqual(1);
    });

    it('should output a component with button classes', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button componentClass='input'>
                Title
            </Button>
        );
        expect(instance.getDOMNode().nodeName).toEqual('INPUT');
        expect(instance.getDOMNode().getAttribute('class')).toEqual('btn btn-default');
    });

    it('should have type="button" by default', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button>
                Title
            </Button>
        );
        expect(instance.getDOMNode().getAttribute('type')).toEqual('button');
    });

    it('should override type if it is passed', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button type='submit'>
                Title
            </Button>
        );
        expect(instance.getDOMNode().getAttribute('type')).toEqual('submit');
    });

    it('should output an anchor if called with a href', () => {
        let href = '/url';
        let instance = ReactTestUtils.renderIntoDocument(
            <Button href={href}>
                Title
            </Button>
        );
        expect(instance.getDOMNode().nodeName).toEqual('A');
        expect(instance.getDOMNode().getAttribute('href')).toEqual(href);
    });

    it('should output an input if called with a href and an input component', () => {
        let href = '/url';
        let instance = ReactTestUtils.renderIntoDocument(
            <Button href={href} componentClass='input'>
                Title
            </Button>
        );
        expect(instance.getDOMNode().nodeName).toEqual('INPUT');
        expect(instance.getDOMNode().getAttribute('href')).toEqual(href);
    });

    it('should output an anchor if called with a target', () => {
        let target = '_blank';
        let instance = ReactTestUtils.renderIntoDocument(
            <Button target={target}>
                Title
            </Button>
        );
        expect(instance.getDOMNode().nodeName).toEqual('A');
        expect(instance.getDOMNode().getAttribute('target')).toEqual(target);
    });

    it('should be disabled', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button disabled>
                Title
            </Button>
        );
        expect(instance.getDOMNode().disabled).toBe(true);
    });

    it('should be disabled link', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button disabled href='#'>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).toInclude('disabled');
    });

    it('should have block class', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button block>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).toInclude('btn-block');
    });

    it('should have passed theme', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button theme='danger'>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).toInclude('btn-danger');
        expect(instance.getDOMNode().className).toExclude('btn-default');
    });

    it('should honour additional classes', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button className='someAdditionalClass' theme='warning'>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).toInclude('btn');
        expect(instance.getDOMNode().className).toInclude('btn-warning');
        expect(instance.getDOMNode().className).toInclude('someAdditionalClass');
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
            expect(instance.getDOMNode().className).toInclude(`btn-${item[1]}`);
        });

    });

    it('should be active', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button active>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).toInclude('active');
    });

    it('should be outline', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button outline>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).toInclude('btn-outline');
    });

    it('should be circle', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button circle>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).toInclude('btn-circle');
    });

    it('should be rounded', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button rounded>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).toInclude('btn-rounded');
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

    it('should be 3d-dim', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button dim>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).toInclude('btn-dim');
    });

    it('should be min-width', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Button minWidth>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).toInclude('btn-min-width');
    });

    it('should be min-width style with exactly width', () => {

        let width = 199;
        let instance = ReactTestUtils.renderIntoDocument(
            <Button minWidth={width}>
                Title
            </Button>
        );
        expect(instance.getDOMNode().className).toExclude('btn-min-width');
        expect(instance.getDOMNode().getAttribute('style')).toInclude(`min-width:${width}px;`)
    });

});
