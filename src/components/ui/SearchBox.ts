import React from 'react';
import type { SearchBoxProps } from './SearchBox-js.types';

export default function SearchBox(props: SearchBoxProps): JSX.Element {
    const { query, setSearchQuery } = props;

    return (
        <input
            type="text" autoFocus
            className="form-control search"
            value={query}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search"
        />
    );
}
