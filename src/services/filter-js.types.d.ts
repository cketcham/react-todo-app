// Derived from src/services/filter.js

export enum FilterType {
    ALL = 'all',
    ACTIVE = 'active',
    COMPLETED = 'completed'
}

export interface ListItem {
    text: string;
    completed: boolean;
}

export type FilterFunction = (list: ListItem[], filter: FilterType) => ListItem[];

export type SearchFunction = (list: ListItem[], query: string) => ListItem[];

export interface Options {
    [FilterType.ALL]: string;
    [FilterType.ACTIVE]: string;
    [FilterType.COMPLETED]: string;
}
