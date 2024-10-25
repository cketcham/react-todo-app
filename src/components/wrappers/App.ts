import React, { Component } from 'react';
import TodoList from '../ui/TodoList';
import StateProvider from './StateProvider';
import KeyStrokeHandler from './KeyStrokeHandler';
import type { AppProps } from './App-js.types';

class App extends Component<AppProps> {
    render() {
        return (
            <StateProvider>
                <KeyStrokeHandler>
                    <TodoList />
                </KeyStrokeHandler>
            </StateProvider>
        );
    }
}

export default App;
