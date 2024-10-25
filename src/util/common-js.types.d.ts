// Derived from src/util/common.js

export type ObjectWithOnly = {
    [key: string]: (...args: any[]) => any;
};

export type WrapChildrenWithProps = {
    [key: string]: any;
};

export type StringIncludesResult = boolean;

/**
 * Returns a new object with only few attributes of the original object.
 * Note: the attributes/properties will still be bound to the old object.
 *
 * @param  {Object} object     The object.
 * @param  {Array}             Array of selected attributes.
 * @return {Object}            New object with only the selected attributes.
 */
export function objectWithOnly(object: Record<string, any>, attrs: string[]): ObjectWithOnly {
    let newObject: ObjectWithOnly = {};

    attrs.forEach(attr => {
        newObject[attr] = object[attr].bind(object);
    });

    return newObject;
}

/**
 * Wraps react children elements with props.
 */
export function wrapChildrenWith(children: React.ReactNode, props: WrapChildrenWithProps): React.ReactNode {
    return React.Children.map(children, child => React.cloneElement(child as React.ReactElement, props));
}

/**
 * Checks if the string includes the substring.
 *
 * @param  {String} str
 * @param  {String} substr
 * @return {Boolean}
 */
export function stringInclues(str: string, substr: string): StringIncludesResult {
    return str.indexOf(substr) !== -1;
}
