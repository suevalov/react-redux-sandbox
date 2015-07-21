import React, { PropTypes } from 'react';
import i18n from 'i18n';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LocaleSelector from 'modules/base/components/locale-selector/locale-selector';
import * as LocaleActions from 'modules/base/actions/locale-actions';
import { Grid, Row, Col } from 'components/index';

@connect(({ localeState }) => ({
    locale: localeState.locale
}))
export default class SettingsPage extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        locale: PropTypes.string.isRequired
    };

    render() {

        const localeActions = bindActionCreators(LocaleActions, this.props.dispatch);

        return (
            <Grid fluid>
                <Row>
                    <h1>{ i18n.t('settings.page-title') }</h1>
                </Row>
                <Row>
                    <Col md={1}>
                        { i18n.t('settings.current-language') }:
                    </Col>
                    <Col md={11}>
                        <LocaleSelector locale={this.props.locale} actions={localeActions} />
                    </Col>
                </Row>
            </Grid>
        );
    }

}
