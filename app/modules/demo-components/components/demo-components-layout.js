import React from 'react';
import { Link } from 'react-router';

require('./demo-components-layout.less');

export default class extends React.Component {

    render() {
        return (
            <div className='demo-components-layout'>
                <ul>
                    <li><Link to='/'>Back to home</Link></li>
                    <li><Link to='/components/buttons'>Buttons</Link></li>
                    <li><Link to='/components/button-groups'>Button groups</Link></li>
                    <li><Link to='/components/dropdown-buttons'>Dropdown Buttons</Link></li>
                </ul>
                { this.props.children }
            </div>
        );
    }

}
