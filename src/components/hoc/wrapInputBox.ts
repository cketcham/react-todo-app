import KeyCode from 'keycode-js';
import { compose, withState, withHandlers } from 'recompose';
import type { WrapInputBoxProps, HandleKeyUp, HandleChange } from './wrapInputBox-js.types';

export default compose(
    withState<string, 'value', 'setValue'>('value', 'setValue', (props: WrapInputBoxProps) => {
        console.log('got props', props);
        return props.value || '';
    }),
    withHandlers<WrapInputBoxProps, { handleKeyUp: HandleKeyUp, handleChange: HandleChange }>({
        handleKeyUp: ({ addNew, setValue }) => (e: React.KeyboardEvent<HTMLInputElement>) => {
            const text = e.currentTarget.value.trim();

            if (e.keyCode === KeyCode.KEY_RETURN && text) {
                addNew(text);
                setValue('');
            }
        },
        handleChange: ({ setValue }) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value);
        }
    })
);
