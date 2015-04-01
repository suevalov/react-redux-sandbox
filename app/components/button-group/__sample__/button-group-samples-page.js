'use strict';

require('./button-group-samples-page.less');

import React from 'react';
import Button from '../../button/button';
import Icon from '../../icon/icon';
import ButtonGroup from '../button-group';
import { Grid, Row } from 'react-bootstrap';

export default React.createClass({

    render() {
        return (
            <Grid fluid className='button-group-samples-page'>
                <Row>
                    <h4>Button Groups</h4>
                    <ButtonGroup>
                        <Button theme='info'>Left</Button>
                        <Button theme='success'>Middle</Button>
                        <Button theme='info'>Right</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button theme='info'>
                            <Icon name='chevron-left'/>
                        </Button>
                        <Button theme='info'>1</Button>
                        <Button theme='success'>2</Button>
                        <Button theme='info'>...</Button>
                        <Button theme='info'>95</Button>
                        <Button theme='info'>
                            <Icon name='chevron-right'/>
                        </Button>
                    </ButtonGroup>
                </Row>
                <Row>
                    <h4>Different Sizes</h4>
                    <ButtonGroup bsSize='small'>
                        <Button theme='info'>Left</Button>
                        <Button theme='success'>Middle</Button>
                        <Button theme='info'>Right</Button>
                    </ButtonGroup>
                    <ButtonGroup bsSize='large'>
                        <Button theme='info'>Left</Button>
                        <Button theme='success'>Middle</Button>
                        <Button theme='info'>Right</Button>
                    </ButtonGroup>
                    <ButtonGroup bsSize='xsmall'>
                        <Button theme='info'>Left</Button>
                        <Button theme='success'>Middle</Button>
                        <Button theme='info'>Right</Button>
                    </ButtonGroup>
                </Row>
                <Row>
                    <h4>Justified</h4>
                    <p>Buttons should be as anchors.</p>
                    <ButtonGroup justified>
                        <Button href='#' theme='info'>Left</Button>
                        <Button href='#' theme='success'>Middle</Button>
                        <Button href='#' theme='info'>Right</Button>
                    </ButtonGroup>
                </Row>
                <Row>
                    <h4>Vertical</h4>
                    <ButtonGroup vertical>
                        <Button theme='info'>Left</Button>
                        <Button theme='success'>Middle</Button>
                        <Button theme='info'>Right</Button>
                    </ButtonGroup>
                </Row>
            </Grid>
        );
    }

});
