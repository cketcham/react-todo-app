// Derived from src/components/ui/TodoItem.js

export interface TodoItemProps {
    data: TodoData;
    changeStatus: (id: number, checked: boolean) => void;
}

export interface TodoData {
    id: number;
    text: string;
    completed: boolean;
}

export enum TodoStatus {
    Completed = 'completed',
    Pending = 'pending'
}
