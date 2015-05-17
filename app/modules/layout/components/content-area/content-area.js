'use strict';

import React from 'react';

class ContentArea extends React.Component {

    render() {
        return (
            <div {...this.props} >
                { this.props.children }
            </div>
        );
    }

}

ContentArea.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.array
};

export default ContentArea;
