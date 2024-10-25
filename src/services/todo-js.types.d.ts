// Derived from src/services/todo.js

export type TodoItem = {
    id: number;
    text: string;
    completed: boolean;
};

export type TodoList = TodoItem[];

export function getAll(): TodoList;

export function getItemById(itemId: number): TodoItem | undefined;

export function updateStatus(items: TodoList, itemId: number, completed: boolean): TodoList;

export function addToList(list: TodoList, data: Omit<TodoItem, 'id'>): TodoList;
