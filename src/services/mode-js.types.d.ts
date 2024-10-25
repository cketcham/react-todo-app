// Derived from src/services/mode.js

// Enum for different modes
export enum Mode {
    NONE = 'none',
    SEARCH = 'search',
    CREATE = 'create'
}

// Type for key codes used in the function
export type KeyCode = string;

// Function type definition for getNextModeByKey
export function getNextModeByKey(current: Mode, keyPressed: KeyCode): Mode;
