import React from 'react';
import InputBox from './InputBox';
import SearchBox from './SearchBox';
import { MODE_SEARCH, MODE_CREATE } from '../../services/mode';
import type { InputWrapperProps } from './InputWrapper-js.types';

export default function InputWrapper(props: InputWrapperProps): JSX.Element | null {
    const { mode, addNew, query, setSearchQuery } = props;

    switch (mode) {
        case MODE_CREATE:
            return <InputBox addNew={addNew} />;

        case MODE_SEARCH:
            return <SearchBox query={query} setSearchQuery={setSearchQuery} />;

        default:
            return null;
    }
}
