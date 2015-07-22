import React from 'react';

const styles = require('./panel.css');

export default class Panel extends React.Component {

    render() {
        return (
            <div className={styles.root}>
                { this.props.children }
            </div>
        );
    }

}
