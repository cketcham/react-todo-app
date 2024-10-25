// Derived from src/components/wrappers/StateProvider.js

export type State = {
    query: string;
    mode: Mode;
    filter: Filter;
    list: TodoItem[];
};

export type TodoItem = {
    text: string;
    completed: boolean;
};

export type Actions = {
    addNew: (text: string) => void;
    changeFilter: (filter: Filter) => void;
    changeStatus: (itemId: number, completed: boolean) => void;
    changeMode: (mode?: Mode) => void;
    setSearchQuery: (text: string) => void;
};

export enum Mode {
    CREATE = 'MODE_CREATE',
    NONE = 'MODE_NONE'
}

export enum Filter {
    ALL = 'FILTER_ALL'
}
