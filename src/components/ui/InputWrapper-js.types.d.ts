// Derived from src/components/ui/InputWrapper.js

export enum Mode {
    SEARCH = 'MODE_SEARCH',
    CREATE = 'MODE_CREATE'
}

export interface InputWrapperProps {
    mode: Mode;
    addNew: () => void;
    query: string;
    setSearchQuery: (query: string) => void;
}
