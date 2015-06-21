
import React, { PropTypes } from 'react';
import redux from 'app-redux';
import { connect, provide } from 'redux/react';
import { bindActionCreators } from 'redux';
import ContentArea from 'modules/layout/components/content-area/content-area';
import SidebarArea from 'modules/layout/components/sidebar-area/sidebar-area';
import LayoutNavigation from 'modules/layout/components/layout-navigation/layout-navigation';
import * as AuthActions from 'modules/auth/actions/auth-actions';

@provide(redux)
@connect(({ authState }) => ({
    loggedIn: authState.loggedIn,
    user: authState.user,
    authToken: authState.authToken
}))
class SignedIn extends React.Component {

    static propTypes = {
        loggedIn: PropTypes.bool.isRequired,
        user: PropTypes.object,
        authToken: PropTypes.string,
        dispatch: PropTypes.func.isRequired
    };

    render() {
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
                        { this.props.children }
                    </ContentArea>
                </div>
            </div>
        );
    }

}

export default SignedIn;
