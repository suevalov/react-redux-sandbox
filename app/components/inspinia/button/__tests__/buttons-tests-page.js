'use strict';

import React from 'react';
import Button from '../button';

export default React.createClass({

    render() {
        return (
            <div>
                <div>
                    <label>Normal Buttons</label>
                    <Button minWidth>
                        Default
                    </Button>
                    <Button theme='primary' minWidth>
                        Primary
                    </Button>
                    <Button theme='success' minWidth>
                        Success
                    </Button>
                    <Button theme='info' minWidth>
                        Info
                    </Button>
                    <Button theme='warning' minWidth>
                        Warning
                    </Button>
                    <Button theme='danger' minWidth>
                        Danger
                    </Button>
                    <Button theme='white' minWidth>
                        White
                    </Button>
                    <Button theme='link' minWidth>
                        Link
                    </Button>
                </div>
                <div>
                    <label>Different sizes</label>
                    <Button size='xsmall'>Xsmall</Button>
                    <Button size='small'>Small</Button>
                    <Button size='large'>Large</Button>
                </div>
                <div>
                    <label>Outline buttons</label>
                    <Button outline>Default</Button>
                    <Button outline theme='primary'>Primary</Button>
                    <Button outline theme='success'>Success</Button>
                    <Button outline theme='info'>Info</Button>
                    <Button outline theme='warning'>Warning</Button>
                    <Button outline theme='danger'>Danger</Button>
                </div>
            </div>
        );
    }

});
