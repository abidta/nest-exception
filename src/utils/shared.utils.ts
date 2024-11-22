
/*!
 * Original Source: https://github.com/nestjs/nest
 * Copyright (c) 2017-2024 Kamil Mysliwiec <https://kamilmysliwiec.com>
 *
 * Licensed under the MIT License (https://opensource.org/licenses/MIT)
 * See the LICENSE file in the root directory for more information.
 *
 */

export const isUndefined = (obj: any): obj is undefined =>
    typeof obj === 'undefined';

export const isNil = (val: any): val is null | undefined =>
    isUndefined(val) || val === null;

export const isObject = (fn: any): fn is object =>
    !isNil(fn) && typeof fn === 'object';


export const isString = (val: any): val is string => typeof val === 'string';