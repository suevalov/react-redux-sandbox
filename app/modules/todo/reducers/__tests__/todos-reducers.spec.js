/* global describe, fdescribe, fit, it, sinon, expect, beforeEach, afterEach */

import todosReducers from 'modules/todo/reducers/todos-reducers';
import Immutable from 'immutable';
import {
    ADD_TODO,
    REMOVE_TODO,
    FETCH_TODOS,
    FLUSH_STATE
} from 'modules/todo/constants/action-types';

import { createRedux } from 'redux';

describe('Todos Reducers', () => {

    let redux = createRedux({
        todoState: todosReducers
    });

    afterEach(() => {
        redux.dispatch({
            type: FLUSH_STATE
        });
    });

    it('should be a function', () => {
        expect(typeof todosReducers).toBe('function');
    });

    it('should return initialState', () => {
        let { todoState } = redux.getState();
        expect(todoState instanceof Immutable.Map).toBeTruthy();
        expect(todoState.get('todos') instanceof Immutable.List).toBeTruthy();
        expect(todoState.get('todos').count()).toBe(0);
        expect(todoState.get('fetched')).toBe(false);
    });

    describe('actions', () => {

        it('should handle FETCH_TODOS', () => {
            redux.dispatch({
                type: FETCH_TODOS,
                todos: [
                    {
                        id: '123',
                        text: 'todo 1'
                    },
                    {
                        id: '1234',
                        text: 'todo 2'
                    }
                ]
            });

            let { todoState } = redux.getState();

            expect(todoState.get('todos').count()).toEqual(2);
            expect(todoState.get('fetched')).toEqual(true);
        });

        it('should handle ADD_TODO', () => {

            redux.dispatch({
                type: ADD_TODO,
                todo: {
                    id: '123',
                    text: 'todo 1'
                }
            });

            let { todoState } = redux.getState();
            expect(todoState.get('todos').count()).toEqual(1);
            expect(todoState.get('todos').toJS()).toEqual([
                {
                    id: '123',
                    text: 'todo 1'
                }
            ]);

        });

        it('should handle REMOVE_TODO', () => {

            redux.dispatch({
                type: FETCH_TODOS,
                todos: [
                    {
                        id: '123',
                        text: 'todo 1'
                    },
                    {
                        id: '1234',
                        text: 'todo 2'
                    }
                ]
            });

            redux.dispatch({
                type: REMOVE_TODO,
                id: '123'
            });

            let { todoState } = redux.getState();
            expect(todoState.get('todos').count()).toEqual(1);
            expect(todoState.get('todos').toJS()).toEqual([
                {
                    id: '1234',
                    text: 'todo 2'
                }
            ]);

        });

    });


});
