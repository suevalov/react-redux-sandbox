'use strict';

import React, { PropTypes } from 'react';

require('./content-area.less');

class ContentArea extends React.Component {

    static propTypes = {
        children: PropTypes.array
    };

    render() {
        return (
            <div className='content-area'>
                { this.props.children }
            </div>
        );
    }

}

export default ContentArea;
