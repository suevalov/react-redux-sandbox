'use strict';

import React from 'react/addons';
import {
    Grid, Row,
    DropdownButton, MenuItem
    } from '../../../components/index';

require('./dropdown-button-samples-page.less');


export default React.createClass({

    render() {

        var props = [
            {
                key: 1,
                title: 'Dropdown 1',
                bsStyle: 'default'
            },
            {
                key: 2,
                title: 'Dropdown 2',
                bsStyle: 'primary'
            },
            {
                key: 3,
                title: 'Dropdown 3',
                bsStyle: 'success'
            },
            {
                key: 4,
                title: 'Dropdown 4',
                bsStyle: 'warning'
            }
        ];


        return (
            <Grid fluid className='button-dropdown-samples-page'>
                <Row>
                    <h4>Dropdowns</h4>
                    {
                        props.map((prop) => {
                            return (
                                <DropdownButton key={prop.key} {...prop}>
                                    <MenuItem>Item 1</MenuItem>
                                    <MenuItem>Item 2</MenuItem>
                                    <MenuItem>Item 3</MenuItem>
                                    <MenuItem divider></MenuItem>
                                    <MenuItem header>Header</MenuItem>
                                    <MenuItem>Item 4</MenuItem>
                                    <MenuItem>Item 5</MenuItem>
                                </DropdownButton>
                            );
                        })
                    }
                </Row>
            </Grid>
        );
    }

});
