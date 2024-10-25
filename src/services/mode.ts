import { KEY_SLASH, KEY_N, KEY_ESCAPE } from 'keycode-js';
import type { Mode } from './mode-js.types';

export const MODE_NONE: Mode = 'none';
export const MODE_SEARCH: Mode = 'search';
export const MODE_CREATE: Mode = 'create';

export function getNextModeByKey(current: Mode, keyPressed: number): Mode {
    switch (current) {
        case MODE_NONE:
            if (keyPressed === KEY_SLASH) return MODE_SEARCH;
            if (keyPressed === KEY_N) return MODE_CREATE;
            break;

        default:
            if (keyPressed === KEY_ESCAPE) return MODE_NONE;
    }

    return current;
}
