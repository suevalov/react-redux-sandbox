import ImmutableStore from 'immutable-store';
import createReducer from 'utils/create-reducer';

export const getNewState = (params) => {
    return ImmutableStore(params);
};

export const getInitialState = () => {
    return getNewState({
        sidebar: [
            {
                label: 'base.sidebar.nav.home',
                to: '/',
                icon: 'th-large'
            },
            {
                label: 'base.sidebar.nav.components',
                to: '/components',
                icon: 'flask'
            },
            {
                label: 'base.sidebar.nav.settings',
                to: '/settings',
                icon: 'gear'
            }
        ]
    });
};

export default createReducer(getInitialState(), {});
