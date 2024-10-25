// Derived from src/components/wrappers/StateProvider.js

export type Mode = 'MODE_CREATE' | 'MODE_NONE';
export type Filter = 'FILTER_ALL';

export interface TodoItem {
    text: string;
    completed: boolean;
}

export interface State {
    query: string;
    mode: Mode;
    filter: Filter;
    list: TodoItem[];
}

export interface Actions {
    addNew: (text: string) => void;
    changeFilter: (filter: Filter) => void;
    changeStatus: (itemId: number, completed: boolean) => void;
    changeMode: (mode?: Mode) => void;
    setSearchQuery: (text: string) => void;
}
