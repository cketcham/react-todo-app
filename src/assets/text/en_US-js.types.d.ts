// Derived from src/assets/text/en_US.js

export type MessageKey = 'MSG_NO_ITEMS' | 'INFO_SHORTCUT_KEYS' | 'INFO_CANCEL_SHORTCUT_KEY';

export interface Messages {
    MSG_NO_ITEMS: string;
    INFO_SHORTCUT_KEYS: string;
    INFO_CANCEL_SHORTCUT_KEY: string;
}

export const enum MessageEnum {
    MSG_NO_ITEMS = 'There are no items.',
    INFO_SHORTCUT_KEYS = 'Press `/` to search and `N` to create a new item.',
    INFO_CANCEL_SHORTCUT_KEY = 'Press `Esc` to cancel.'
}
