import { isArray } from 'lodash';

export function getFiniteValues(obj) {
  const valuesMap = {};
  getProp(obj);

  function getProp(o) {
    for (let prop in o) {
      if (isArray(o[prop])) {
        o[prop].forEach(id => (valuesMap[id] = true));
      } else {
        getProp(o[prop]);
      }
    }
  }

  return valuesMap;
}
