import React from 'react';

const styles = require('./panel.css');

export default class PanelContent extends React.Component {

    render() {
        return (
            <div className={styles.content}>
                { this.props.children }
            </div>
        );
    }

}
