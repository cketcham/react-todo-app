// Derived from src/components/hoc/wrapInputBox.js

export type WrapInputBoxProps = {
    value: string;
    setValue: (value: string) => void;
    addNew: (text: string) => void;
};

export type HandleKeyUpEvent = {
    keyCode: number;
    target: {
        value: string;
    };
};

export type HandleChangeEvent = {
    target: {
        value: string;
    };
};

export type WithHandlers = {
    handleKeyUp: (event: HandleKeyUpEvent) => void;
    handleChange: (event: HandleChangeEvent) => void;
};
