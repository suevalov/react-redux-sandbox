'use strict';

import React from 'react';
import { Grid, Row, Button } from '../../../components';

require('./button-samples-page.less');

export default React.createClass({

    displayName: 'ButtonSamplesPage',

    render() {
        return (
            <Grid fluid className='button-samples-page'>
                <Row>
                    <h4>Normal Buttons</h4>
                    <Button minWidth>Default</Button>
                    <Button theme='primary' minWidth>Primary</Button>
                    <Button theme='success' minWidth>Success</Button>
                    <Button theme='info' minWidth>Info</Button>
                    <Button theme='warning' minWidth>Warning</Button>
                    <Button theme='danger' minWidth>Danger</Button>
                    <Button theme='white' minWidth>White</Button>
                    <Button theme='link' minWidth>Link</Button>
                </Row>
                <Row>
                    <h4>Different sizes</h4>
                    <Button size='xsmall'>Xsmall</Button>
                    <Button size='small'>Small</Button>
                    <Button size='large'>Large</Button>
                </Row>
                <Row>
                    <h4>Outline buttons</h4>
                    <Button outline>Default</Button>
                    <Button outline theme='primary'>Primary</Button>
                    <Button outline theme='success'>Success</Button>
                    <Button outline theme='info'>Info</Button>
                    <Button outline theme='warning'>Warning</Button>
                    <Button outline theme='danger'>Danger</Button>
                </Row>
                <Row>
                    <h4>Active buttons</h4>
                    <Button active minWidth>Default</Button>
                    <Button active theme='primary' minWidth>Primary</Button>
                    <Button active theme='success' minWidth>Success</Button>
                    <Button active theme='info' minWidth>Info</Button>
                    <Button active theme='warning' minWidth>Warning</Button>
                    <Button active theme='danger' minWidth>Danger</Button>
                    <Button active theme='link' minWidth>Link</Button>
                </Row>
                <Row>
                    <h4>Disabled buttons</h4>
                    <Button disabled minWidth>Default</Button>
                    <Button disabled theme='primary' minWidth>Primary</Button>
                    <Button disabled theme='success' minWidth>Success</Button>
                    <Button disabled theme='info' minWidth>Info</Button>
                    <Button disabled theme='warning' minWidth>Warning</Button>
                    <Button disabled theme='danger' minWidth>Danger</Button>
                    <Button disabled theme='link' minWidth>Link</Button>
                </Row>
                <Row>
                    <h4>Rounded buttons</h4>
                    <Button rounded minWidth>Default</Button>
                    <Button rounded theme='primary' minWidth>Primary</Button>
                    <Button rounded theme='success' minWidth>Success</Button>
                    <Button rounded theme='info' minWidth>Info</Button>
                    <Button rounded theme='warning' minWidth>Warning</Button>
                    <Button rounded theme='danger' minWidth>Danger</Button>
                </Row>
                <Row>
                    <h4>Circle buttons</h4>
                    <Button circle>D</Button>
                    <Button circle theme='primary'>P</Button>
                    <Button circle theme='success'>S</Button>
                    <Button circle theme='info'>I</Button>
                    <Button circle theme='warning'>W</Button>
                    <Button circle theme='danger'>D</Button>
                </Row>
                <Row>
                    <h4>3D buttons</h4>
                    <Button dim>D</Button>
                    <Button dim theme='primary'>P</Button>
                    <Button dim theme='success'>S</Button>
                    <Button dim theme='info'>I</Button>
                    <Button dim theme='warning'>W</Button>
                    <Button dim theme='danger'>D</Button>
                </Row>
            </Grid>
        );
    }

});
