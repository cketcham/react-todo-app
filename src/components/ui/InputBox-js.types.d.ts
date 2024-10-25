// Derived from src/components/ui/InputBox.js

export type InputBoxProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};
