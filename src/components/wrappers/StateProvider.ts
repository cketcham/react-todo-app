import React, { Component, ReactNode } from 'react';
import { FILTER_ALL } from '../../services/filter';
import { MODE_CREATE, MODE_NONE } from '../../services/mode';
import { objectWithOnly, wrapChildrenWith } from '../../util/common';
import { getAll, addToList, updateStatus } from '../../services/todo';
import type { StateProviderProps, StateProviderState, TodoItem } from './StateProvider-js.types';

class StateProvider extends Component<StateProviderProps, StateProviderState> {
    constructor(props: StateProviderProps) {
        super(props);
        this.state = {
            query: '',
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            list: getAll()
        };
    }

    render(): ReactNode {
        const children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery'])
        });

        return <div>{children}</div>;
    }

    addNew(text: string): void {
        const updatedList = addToList(this.state.list, { text, completed: false });

        this.setState({ list: updatedList });
    }

    changeFilter(filter: string): void {
        this.setState({ filter });
    }

    changeStatus(itemId: number, completed: boolean): void {
        const updatedList = updateStatus(this.state.list, itemId, completed);

        this.setState({ list: updatedList });
    }

    changeMode(mode: string = MODE_NONE): void {
        this.setState({ mode });
    }

    setSearchQuery(text: string): void {
        this.setState({ query: text || '' });
    }
}

export default StateProvider;
