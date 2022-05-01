/* emilien <emilien@emilien-lx>, 2021 */

let id = 0;
export const uid = (prefix = 'uid') => `${prefix}-${id++}`;
