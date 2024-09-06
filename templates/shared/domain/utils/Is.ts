/**
 * @fileoverview provides a set of functions to check the type of a value using the typeof operator.
 *
 * @example is.number(100) // true
 * @example is.not.number(100) // false
 */

export default {
    array: Array.isArray,
    bigint: (value: unknown) => ('bigint' === typeof value),
    boolean: (value: unknown) => ('boolean' === typeof value),
    builtBy: (constructor: Function, value: unknown) => (value !== undefined) && (value !== null) && (value.constructor === constructor),
    esModule: (value: { __esModule?: boolean; }) => (value !== null) && ('object' === typeof value) && (value.__esModule === true),
    finite: Number.isFinite,
    function: (value: unknown) => ('function' === typeof value),
    instanceOf: (constructor: Function, value: unknown) => value instanceof constructor,
    integer: Number.isInteger,
    iterable: (value: { [Symbol.iterator]?: unknown; }) => (value !== null) && ('object' === typeof value) && ('function' === typeof value[Symbol.iterator]),
    nan: (value: unknown) => Object.is(value, NaN),
    number: (value: unknown) => ('number' === typeof value),
    object: (value: unknown) => (value !== null) && ('object' === typeof value),
    ref: Object.is,
    string: (value: unknown) => ('string' === typeof value),
    symbol: (value: unknown) => ('symbol' === typeof value),
    not: {
        array: (value: unknown) => !Array.isArray(value),
        bigint: (value: unknown) => ('bigint' !== typeof value),
        boolean: (value: unknown) => ('boolean' !== typeof value),
        builtBy: (constructor: Function, value: unknown) => (value === undefined) || (value === null) || (value.constructor !== constructor),
        esModule: (value: { __esModule?: boolean; }) => (value === null) || ('object' !== typeof value) || (value.__esModule !== true),
        finite: (value: unknown) => !Number.isFinite(value),
        function: (value: unknown) => ('function' !== typeof value),
        instanceOf: (constructor: Function, value: unknown) => !(value instanceof constructor),
        integer: (value: unknown) => !Number.isInteger(value),
        iterable: (value: { [Symbol.iterator]?: unknown; }) => (value === null) || ('object' !== typeof value) || ('function' !== typeof value[Symbol.iterator]),
        nan: (value: unknown) => !Object.is(value, NaN),
        number: (value: unknown) => ('number' !== typeof value),
        object: (value: unknown) => (value === null) || ('object' !== typeof value),
        ref: (value: unknown, other: unknown) => !Object.is(value, other),
        string: (value: unknown) => ('string' !== typeof value),
        symbol: (value: unknown) => ('symbol' !== typeof value),
    },
};
