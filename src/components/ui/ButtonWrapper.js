import React from 'react';
import type { ButtonWrapperProps } from './ButtonWrapper-js.types';
import { MODE_NONE, MODE_CREATE, MODE_SEARCH } from '../../services/mode';

export default function ButtonWrapper(props: ButtonWrapperProps): JSX.Element {
    const { mode, changeMode } = props;
    const isCreateMode = (): boolean => mode === MODE_CREATE;
    const isSearchMode = (): boolean => mode === MODE_SEARCH;

    return (
        <div>
            <a title="Add New"
                className={'button add ' + (isCreateMode() ? 'selected' : '')}
                onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}></a>
            <a title="Search"
                className={'button search ' + (isSearchMode() ? 'selected' : '')}
                onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}></a>
        </div>
    );
}
