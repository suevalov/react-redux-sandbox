
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SidebarArea from 'modules/base/components/sidebar-area/sidebar-area';
import * as AuthActions from 'modules/auth/actions/auth-actions';
import logoutHandlerDecorator from 'modules/auth/decorators/logout-handler-decorator';

const styles = require('./main-layout.css');

@logoutHandlerDecorator
@connect(({ authState, localeState, navigationState }) => ({
    user: authState.user,
    locale: localeState.locale,
    sidebarItems: navigationState.sidebar
}))
class MainLayout extends React.Component {

    static propTypes = {
        user: PropTypes.object,
        dispatch: PropTypes.func.isRequired,
        sidebarItems: PropTypes.array.isRequired
    };

    render() {
        const authActions = bindActionCreators(AuthActions, this.props.dispatch);

        return (
            <div className={styles.root}>
                <div className={styles.navigation}>
                    <SidebarArea user={this.props.user} actions={authActions} items={this.props.sidebarItems} />
                </div>
                <div className={styles.content}>
                    { this.props.children }
                </div>
            </div>
        );
    }

}

export default MainLayout;
