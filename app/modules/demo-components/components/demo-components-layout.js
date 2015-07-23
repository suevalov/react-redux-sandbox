import React from 'react';
import { Link } from 'react-router';
import i18n from 'i18n';
import metaTitle from 'decorators/meta-title-decorator';

const styles = require('./demo-components-layout.css');

@metaTitle({
    title: 'Components'
})
export default class DemoComponentsLayout extends React.Component {

    render() {
        return (
            <div className={styles.root}>
                <ul>
                    <li><Link to='/'>
                        { i18n.t('demo-components.nav.back-to-home') }
                    </Link></li>
                    <li><Link to='/components/buttons'>
                        { i18n.t('demo-components.nav.buttons') }
                    </Link></li>
                    <li><Link to='/components/button-groups'>
                        { i18n.t('demo-components.nav.button-groups') }
                    </Link></li>
                    <li><Link to='/components/dropdown-buttons'>
                        { i18n.t('demo-components.nav.dropdown-buttons') }
                    </Link></li>
                </ul>
                { this.props.children }
            </div>
        );
    }

}
