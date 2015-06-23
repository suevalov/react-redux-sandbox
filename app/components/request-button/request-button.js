import React, { PropTypes } from 'react';
import Button from 'components/button/button';
import classNames from 'classnames';

const styles = require('./request-button.css');

export default class RequestButton extends React.Component {

    static propTypes = {
        status: PropTypes.oneOf(['requesting','success', 'failed']),
        type: PropTypes.string,
        theme: PropTypes.string,
        className: PropTypes.string
    };

    render() {

        let classes = {
            [styles.button]: true,
            [styles.shaky]: this.props.status === 'failed',
            [this.props.className]: this.props.className ? true : false
        };

        return (
            <Button {...this.props} className={classNames(classes)}>
                { this.props.children }
            </Button>
        );
    }

}
