
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SidebarArea from 'modules/base/components/sidebar-area/sidebar-area';
import LayoutNavigation from 'modules/base/components/layout-navigation/layout-navigation';
import LocaleSelector from 'modules/base/components/locale-selector/locale-selector';
import * as AuthActions from 'modules/auth/actions/auth-actions';
import * as LocaleActions from 'modules/base/actions/locale-actions';
import logoutHandlerDecorator from 'modules/auth/decorators/logout-handler-decorator';

const styles = require('./main-layout.css');

@logoutHandlerDecorator
@connect(({ authState, localeState }) => ({
    user: authState.user,
    authToken: authState.authToken,
    locale: localeState.locale
}))
class MainLayout extends React.Component {

    static propTypes = {
        user: PropTypes.object,
        authToken: PropTypes.string,
        locale: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render() {
        const authActions = bindActionCreators(AuthActions, this.props.dispatch);
        const localeActions = bindActionCreators(LocaleActions, this.props.dispatch);

        return (
            <div className={styles.root}>
                <div className={styles.navigation}>
                    <SidebarArea user={this.props.user} />
                </div>
                <div className={styles.content}>
                    <LocaleSelector locale={this.props.locale} actions={localeActions} />
                    <LayoutNavigation actions={authActions}
                                      authToken={this.props.authToken} />
                    { this.props.children }
                </div>
            </div>
        );
    }

}

export default MainLayout;
