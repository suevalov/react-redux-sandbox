'use strict';

import React from 'react';

class ContentArea extends React.Component {

    static propTypes = {
        children: React.PropTypes.array
    };

    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }

}

export default ContentArea;
