// Derived from src/components/ui/Footer.js

export type FooterProps = {
    activeItemCount: number;
    filter: FilterType;
    changeFilter: (filter: FilterType) => void;
};

export enum FilterType {
    ALL = 'all',
    ACTIVE = 'active',
    COMPLETED = 'completed'
}
