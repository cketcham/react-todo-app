// Derived from src/components/wrappers/KeyStrokeHandler.js

export interface KeyStrokeHandlerProps {
    data: {
        mode: Mode;
    };
    actions: {
        changeMode: (mode: Mode) => void;
    };
    children: React.ReactNode;
}

export enum Mode {
    // SECOND AGENT: [MISSING CONTEXT] - The specific modes available are not defined in the provided code.
}

export interface KeyStrokeHandlerState {
    // If there is any state, define it here. The current component does not use local state.
}
