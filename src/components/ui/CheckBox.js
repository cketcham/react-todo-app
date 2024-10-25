import React, { Component } from 'react';
import type { CheckBoxProps } from './CheckBox-js.types';

interface CheckBoxState {
    checked: boolean;
}

class CheckBox extends Component<CheckBoxProps, CheckBoxState> {
    constructor(props: CheckBoxProps) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { checked } = e.target;

        this.setState({ checked });
        this.props.onChange(checked);
    }

    render() {
        return (
            <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleChange.bind(this)}
            />
        );
    }
}

export default CheckBox;
