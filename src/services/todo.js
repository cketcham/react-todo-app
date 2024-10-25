import update from 'immutability-helper';
import type { TodoItem, TodoList } from './todo-js.types';

/**
 * Get the list of todo items.
 * @return {TodoList}
 */
export function getAll(): TodoList {
    return [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false
        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false
        }
    ];
}

export function getItemById(itemId: number): TodoItem | undefined {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items: TodoList, itemId: number, completed: boolean): TodoList {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            completed: { $set: completed }
        }
    });
}

/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter: number = 1;

function getNextId(): number {
    return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {TodoList} list
 * @param {Partial<TodoItem>} data
 * @return {TodoList}
 */
export function addToList(list: TodoList, data: Partial<TodoItem>): TodoList {
    let item: TodoItem = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
