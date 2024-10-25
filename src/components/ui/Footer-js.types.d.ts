// Derived from src/components/ui/Footer.js

export type FooterProps = {
    activeItemCount: number;
    filter: FilterType;
    changeFilter: (filter: FilterType) => void;
};

export type FilterType = 'all' | 'active' | 'completed';
