import React from 'react';
import { MODE_NONE } from '../../services/mode';
import { INFO_SHORTCUT_KEYS, INFO_CANCEL_SHORTCUT_KEY } from '../../assets/text/en_US';
import type { InfoProps } from './Info-js.types';

export default function Info(props: InfoProps): JSX.Element {
    const message: string = props.mode === MODE_NONE ? INFO_SHORTCUT_KEYS : INFO_CANCEL_SHORTCUT_KEY;

    return <p className="info">{message}</p>;
}
