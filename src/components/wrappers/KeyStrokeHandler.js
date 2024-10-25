import React, { Component, ReactNode } from 'react';
import type { KeyStrokeHandlerProps, Mode } from './KeyStrokeHandler-js.types';
import { getNextModeByKey } from '../../services/mode';
import { wrapChildrenWith } from '../../util/common';

class KeyStrokeHandler extends Component<KeyStrokeHandlerProps> {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyUp.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyUp.bind(this));
    }

    handleKeyUp(e: KeyboardEvent) {
        const { mode } = this.props.data;
        const nextMode: Mode = getNextModeByKey(mode, e.keyCode);

        if (nextMode !== mode) {
            e.preventDefault();
            this.props.actions.changeMode(nextMode);
        }
    }

    render(): ReactNode {
        return <div>{wrapChildrenWith(this.props.children, this.props)}</div>;
    }
}

export default KeyStrokeHandler;
