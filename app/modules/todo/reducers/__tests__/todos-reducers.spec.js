/* global describe, fdescribe, fit, it, sinon, expect, beforeEach, afterEach */

import todosReducers from 'modules/todo/reducers/todos-reducers';
import {
    ADD_TODO,
    REMOVE_TODO,
    FETCH_TODOS,
    FLUSH_STATE
} from 'modules/todo/constants/action-types';

import { createStore, combineReducers } from 'redux';

describe('Todos Reducers', () => {

    let store = createStore(combineReducers({
        todoState: todosReducers
    }));

    afterEach(() => {
        store.dispatch({
            type: FLUSH_STATE
        });
    });

    it('should be a function', () => {
        expect(typeof todosReducers).toBe('function');
    });

    it('should return initialState', () => {
        let { todoState } = store.getState();
        expect(todoState.todos.length).toBe(0);
        expect(todoState.fetched).toBe(false);
    });

    describe('actions', () => {

        it('should handle FETCH_TODOS', () => {
            store.dispatch({
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

            let { todoState } = store.getState();

            expect(todoState.todos.length).toEqual(2);
            expect(todoState.fetched).toEqual(true);
        });

        it('should handle ADD_TODO', () => {

            store.dispatch({
                type: ADD_TODO,
                todo: {
                    id: '123',
                    text: 'todo 1'
                }
            });

            let { todoState } = store.getState();
            expect(todoState.todos.length).toEqual(1);
            expect(todoState.todos).toEqual([
                {
                    id: '123',
                    text: 'todo 1'
                }
            ]);

        });

        it('should handle REMOVE_TODO', () => {

            store.dispatch({
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

            store.dispatch({
                type: REMOVE_TODO,
                id: '123'
            });

            let { todoState } = store.getState();
            expect(todoState.todos.length).toEqual(1);
            expect(todoState.todos).toEqual([
                {
                    id: '1234',
                    text: 'todo 2'
                }
            ]);

        });

    });


});
