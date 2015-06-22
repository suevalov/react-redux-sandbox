import React, { PropTypes } from 'react';

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
