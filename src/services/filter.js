import { stringIncludes } from '../util/common';
import type { Filter, TodoItem } from './filter-js.types';

export const FILTER_ALL: Filter = 'all';
export const FILTER_ACTIVE: Filter = 'active';
export const FILTER_COMPLETED: Filter = 'completed';

export function applyFilter(list: TodoItem[], filter: Filter): TodoItem[] {
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

export function getOptions(): Record<Filter, string> {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed'
    };
}
