import React from 'react';
import TodoItem from './TodoItem';
import { MSG_NO_ITEMS } from '../../assets/text/en_US';
import type { FilteredListProps, TodoItemType } from './FilteredList-js.types';

export default function FilteredList(props: FilteredListProps): JSX.Element {
    const { items, changeStatus } = props;

    if (items.length === 0) {
        return (
            <p className="alert alert-info">{MSG_NO_ITEMS}</p>
        );
    }

    return (
        <ul className="list-unstyled">
            {items.map((item: TodoItemType) => (
                <TodoItem key={item.id} data={item} changeStatus={changeStatus} />
            ))}
        </ul>
    );
}
