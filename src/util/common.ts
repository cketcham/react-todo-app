import React from 'react';
import type { SelectedAttributes } from './common-js.types';

/**
 * Returns a new object with only few attributes of the original object.
 * Note: the attributes/properties will still be bound to the old object.
 *
 * @param  {Object} object     The object.
 * @param  {Array}  attrs      Array of selected attributes.
 * @return {Object}            New object with only the selected attributes.
 */
export function objectWithOnly<T extends object, K extends keyof T>(object: T, attrs: K[]): Pick<T, K> {
    let newObject = {} as Pick<T, K>;

    attrs.forEach(attr => {
        newObject[attr] = object[attr].bind(object);
    });

    return newObject;
}

/**
 * Wraps react children elements with props.
 */
export function wrapChildrenWith(children: React.ReactNode, props: Record<string, any>): React.ReactNode {
    return React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, props) : child);
}

/**
 * Checks if the string includes the substring.
 *
 * @param  {String} str
 * @param  {String} substr
 * @return {Boolean}
 */
export function stringIncludes(str: string, substr: string): boolean {
    return str.indexOf(substr) !== -1;
}
