import { isArray } from 'lodash';

export const getNestedMap = (string, id, obj= {}) =>
  string.length >= 1
    ? { ...obj, [string[0]]: getNestedMap(string.slice(1), id, obj[string[0]]) }
    : isArray(obj) ? [...obj, id] : [id];
