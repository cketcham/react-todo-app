// Derived from src/components/ui/ButtonWrapper.js

// Enum for mode types
export enum Mode {
    NONE = 'MODE_NONE',
    CREATE = 'MODE_CREATE',
    SEARCH = 'MODE_SEARCH'
}

// Props type for ButtonWrapper component
export interface ButtonWrapperProps {
    mode: Mode;
    changeMode: (newMode: Mode) => void;
}
