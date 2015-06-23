
import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux';
import SidebarArea from 'modules/layout/components/sidebar-area/sidebar-area';
import LayoutNavigation from 'modules/layout/components/layout-navigation/layout-navigation';
import * as AuthActions from 'modules/auth/actions/auth-actions';
import logoutHandlerDecorator from 'modules/auth/decorators/logout-handler-decorator';

const styles = require('./main-layout.css');

@logoutHandlerDecorator
@connect(({ authState }) => ({
    user: authState.user,
    authToken: authState.authToken
}))
class MainLayout extends React.Component {

    static contextTypes = {
        redux: PropTypes.object.isRequired
    };

    static propTypes = {
        user: PropTypes.object,
        authToken: PropTypes.string,
        dispatch: PropTypes.func.isRequired
    };

    render() {
        let actions = bindActionCreators(AuthActions, this.props.dispatch);

        return (
            <div className={styles.root}>
                <div className={styles.navigation}>
                    <SidebarArea user={this.props.user} />
                </div>
                <div className={styles.content}>
                    <LayoutNavigation actions={actions}
                                      authToken={this.props.authToken} />
                    { this.props.children }
                </div>
            </div>
        );
    }

}

export default MainLayout;
