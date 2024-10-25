import React from 'react';
import CheckBox from './CheckBox';
import type { TodoItemProps } from './TodoItem-js.types';

export default function TodoItem(props: TodoItemProps): JSX.Element {
    const { data, changeStatus } = props;
    const handleChange = (checked: boolean): void => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed ? 'completed' : 'pending');

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange}/> {data.text}
                </label>
            </div>
        </li>
    );
}
