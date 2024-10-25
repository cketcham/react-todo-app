// Derived from src/components/ui/TodoList.js

export interface TodoListProps {
    data: TodoListData;
    actions: TodoListActions;
}

export interface TodoListData {
    list: TodoItem[];
    filter: FilterType;
    mode: ModeType;
    query: string;
}

export interface TodoListActions {
    addNew: () => void;
    changeFilter: (filter: FilterType) => void;
    changeStatus: (id: string, status: boolean) => void;
    changeMode: (mode: ModeType) => void;
    setSearchQuery: (query: string) => void;
}

export interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';

export type ModeType = 'view' | 'edit';
