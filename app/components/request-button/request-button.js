import React, { PropTypes } from 'react';
import Button from 'components/button/button';
import classNames from 'classnames';
import AsyncStatus from 'utils/async-status';

const styles = require('./request-button.css');

export default class RequestButton extends React.Component {

    static propTypes = {
        status: PropTypes.oneOf([AsyncStatus.NONE, AsyncStatus.REQUEST, AsyncStatus.SUCCESS, AsyncStatus.FAILURE]),
        type: PropTypes.string,
        theme: PropTypes.string,
        className: PropTypes.string
    };

    render() {

        let classes = {
            [styles.button]: true,
            [styles.shaky]: this.props.status === AsyncStatus.FAILURE,
            [this.props.className]: this.props.className ? true : false
        };

        return (
            <Button {...this.props} className={classNames(classes)}>
                { this.props.children }
            </Button>
        );
    }

}
