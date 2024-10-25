// Derived from src/components/wrappers/App.js

import { ReactNode } from 'react';

// Define a type for the props of the App component
export interface AppProps {
    children?: ReactNode;
}

// Define a type for the StateProvider component
export interface StateProviderProps {
    children: ReactNode;
}

// Define a type for the KeyStrokeHandler component
export interface KeyStrokeHandlerProps {
    children: ReactNode;
}

// Define a type for the TodoList component
export interface TodoListProps {
    // Assuming TodoList might have props, define them here if known
}
