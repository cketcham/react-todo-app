// Derived from src/components/ui/CheckBox.js

export interface CheckBoxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export interface CheckBoxState {
    checked: boolean;
}
