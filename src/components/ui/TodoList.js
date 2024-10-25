import React from 'react';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import { applyFilter, search, FILTER_ACTIVE } from '../../services/filter';
import type { TodoListProps } from './TodoList-js.types';

export default function TodoList(props: TodoListProps): JSX.Element {
    const { list, filter, mode, query } = props.data;
    const { addNew, changeFilter, changeStatus, changeMode, setSearchQuery } = props.actions;
    const activeItemCount = applyFilter(list, FILTER_ACTIVE).length;
    const items = search(applyFilter(list, filter), query);

    return (
        <div className="container">
            <div className="row">
                <div className="todolist">
                    <Header {...{ addNew, mode, query, setSearchQuery }} />
                    <FilteredList {...{ items, changeStatus }} />
                    <Footer {...{ activeItemCount, filter, changeFilter, mode, changeMode }} />
                    <Info {...{ mode }} />
                </div>
            </div>
        </div>
    );
}
