import React, { PropTypes } from 'react';
import i18n from 'i18n';
import availableLocales from 'modules/base/constants/available-locales';
import {
    DropdownButton, MenuItem
} from 'components/index';
import { find } from 'lodash/collection';

require('./locale-selector.css');

export default class LocaleSelector extends React.Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        locale: PropTypes.string.isRequired
    }

    onSelectMenuItem = (code) => {
        return () => {
            this.props.actions.setLocale(code);
        };
    }

    renderOptions() {
        return availableLocales.map((locale) => {
            const active = locale.code === this.props.locale;
            return (
                <MenuItem key={locale.code} active={active} onSelect={this.onSelectMenuItem(locale.code)}>
                    { i18n.t(locale.title) }
                </MenuItem>
            );
        });
    }

    render() {

        let currentLocale = find(availableLocales, { code: this.props.locale });

        return (
            <DropdownButton bsStyle='white' title={ i18n.t(currentLocale.title) }>
                { this.renderOptions() }
            </DropdownButton>
        );
    }

}
