import React from 'react';
import InputWrapper from './InputWrapper';
import type { HeaderProps } from './Header-js.types';

export default function Header(props: HeaderProps): JSX.Element {
    return (
        <header>
            <h1>Things To Do</h1>
            <InputWrapper {...props} />
        </header>
    );
}
