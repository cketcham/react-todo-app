// Derived from src/assets/text/en_US.js

export type MessageType = 'MSG_NO_ITEMS' | 'INFO_SHORTCUT_KEYS' | 'INFO_CANCEL_SHORTCUT_KEY';

export interface Messages {
    MSG_NO_ITEMS: string;
    INFO_SHORTCUT_KEYS: string;
    INFO_CANCEL_SHORTCUT_KEY: string;
}

export const enum MessageKeys {
    NoItems = 'MSG_NO_ITEMS',
    ShortcutKeys = 'INFO_SHORTCUT_KEYS',
    CancelShortcutKey = 'INFO_CANCEL_SHORTCUT_KEY'
}
