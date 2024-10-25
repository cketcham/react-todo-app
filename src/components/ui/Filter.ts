import React from 'react';
import type { FilterProps, Options } from './Filter-js.types';
import { getOptions } from '../../services/filter';

export default function Filter(props: FilterProps): JSX.Element {
    const options: Options = getOptions();
    const { filter, changeFilter } = props;
    const getClass = (key: string): string => (key === filter ? 'selected' : '');

    return (
        <ul className="filters list-unstyled clearfix">
            {Object.keys(options).map((key: string) => (
                <li key={key}>
                    <a onClick={() => changeFilter(key)} className={getClass(key)}>
                        {options[key]}
                    </a>
                </li>
            ))}
        </ul>
    );
}
