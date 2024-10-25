// Derived from src/components/ui/Filter.js

export type FilterProps = {
    filter: string;
    changeFilter: (key: string) => void;
};

export type Options = Record<string, string>;
