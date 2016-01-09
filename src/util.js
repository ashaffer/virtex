/**
 * Imports
 */

import isString from '@f/is-string'
import isUndefined from '@f/is-undefined'

/**
 * Utilities
 */

function isThunk (a) {
  return !isString(a.type)
}

function isSameNode (a, b) {
  return a.type === b.type
}

function getKey (a) {
  return a.key
}

function createPath (vnode, path, pos) {
  const key = getKey(vnode)
  const part = isUndefined(key) ? pos : key

  return path + '.' + part
}

/**
 * Exports
 */

export {
  isThunk,
  isSameNode,
  createPath,
  getKey
}