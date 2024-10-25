// Derived from src/components/ui/Info.js

// Enum for mode types
export enum Mode {
    NONE = 'MODE_NONE'
}

// Type for the props of the Info component
export interface InfoProps {
    mode: Mode;
}

// Type for the shortcut keys
export type ShortcutKeys = string;

// Type for the Info component function
export type InfoComponent = (props: InfoProps) => JSX.Element;
