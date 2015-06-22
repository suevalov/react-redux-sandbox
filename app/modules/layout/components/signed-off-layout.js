import React, { PropTypes } from 'react';
import navigationDecorator from 'decorators/navigation-decorator';

@navigationDecorator
class SignedOff extends React.Component {

    static contextTypes = {
        redux: PropTypes.object.isRequired
    };

    static propTypes = {
        navigation: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.unsubscribe = this.context.redux.subscribe(() => {
            let { authState } = this.context.redux.getState();
            if (authState.loggedIn) {
                let { location, navigation } = this.props;
                if (location.state && location.state.nextPathname) {
                    navigation.replaceWith(location.state.nextPathname);
                } else {
                    navigation.replaceWith('/');
                }
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div className='layout-handler layout-handler--grey'>
                { this.props.children }
            </div>
        );
    }

}

export default SignedOff;
