import { stringIncludes } from '../util/common';
import type { FilterType, TodoItem } from './filter-js.types';

export const FILTER_ALL: FilterType = 'all';
export const FILTER_ACTIVE: FilterType = 'active';
export const FILTER_COMPLETED: FilterType = 'completed';

export function applyFilter(list: TodoItem[], filter: FilterType): TodoItem[] {
    switch (filter) {
        case FILTER_COMPLETED:
            return list.filter(item => item.completed === true);

        case FILTER_ACTIVE:
            return list.filter(item => item.completed !== true);

        default:
            return list;
    }
}

export function search(list: TodoItem[], query: string): TodoItem[] {
    let q = query.trim().toLowerCase();

    return list.filter(({ text }) => stringIncludes(text.toLowerCase(), q));
}

export function getOptions(): Record<FilterType, string> {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed'
    };
}
