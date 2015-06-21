import React from 'react';

class SignedOff extends React.Component {

    render() {
        return (
            <div className='layout-handler layout-handler--grey'>
                { this.props.children }
            </div>
        );
    }

}

export default SignedOff;
