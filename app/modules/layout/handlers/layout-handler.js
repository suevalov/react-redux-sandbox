import './layout.less';
import React, { PropTypes } from 'react';
import { RouteHandler } from 'react-router';
import { RouteStore } from 'router';
import redux from 'app-redux';
import { connect, provide } from 'redux/react';
import { bindActionCreators } from 'redux';
import ContentArea from 'modules/layout/components/content-area/content-area';
import SidebarArea from 'modules/layout/components/sidebar-area/sidebar-area';
import LayoutNavigation from 'modules/layout/components/layout-navigation/layout-navigation';
import * as AuthActions from '../../auth/actions/auth-redux-actions';

@provide(redux)
@connect(({ authState }) => ({
    loggedIn: authState.loggedIn,
    user: authState.user,
    authToken: authState.authToken
}))
class LayoutHandler extends React.Component {

    static propTypes = {
        loggedIn: PropTypes.bool.isRequired,
        user: PropTypes.object,
        authToken: PropTypes.string,
        dispatch: PropTypes.func.isRequired
    };

    render() {

        if (RouteStore.isCurrentPath('/login')) {

            return (
                <div className='layout-handler layout-handler--grey'>
                    <RouteHandler />
                </div>
            );

        }

        let actions = bindActionCreators(AuthActions, this.props.dispatch);

        return (
            <div className='layout-handler'>
                <div className='layout-handler__nav'>
                    <SidebarArea user={this.props.user} />
                </div>
                <div className='layout-handler__content'>
                    <ContentArea>
                        <LayoutNavigation actions={actions}
                                          loggedIn={this.props.loggedIn}
                                          authToken={this.props.authToken} />
                        <RouteHandler />
                    </ContentArea>
                </div>
            </div>
        );

    }

}

export default LayoutHandler;
