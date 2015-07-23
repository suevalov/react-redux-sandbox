import React from 'react';

const styles = require('./panel.css');

export default class PanelTitle extends React.Component {

    render() {
        return (
            <div className={styles.title}>
                { this.props.children }
            </div>
        );
    }

}
