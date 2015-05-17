'use strict';

import React from 'react';

class SidebarArea extends React.Component {

    render() {
        return (
            <div {...this.props}>
                { this.props.children }
            </div>
        );
    }

}

export default SidebarArea;
