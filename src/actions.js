/**
 * Action types
 */

const CREATE_TEXT_NODE = 'CREATE_TEXT_NODE'
const CREATE_ELEMENT = 'CREATE_ELEMENT'
const SET_ATTRIBUTE = 'SET_ATTRIBUTE'
const REMOVE_ATTRIBUTE = 'REMOVE_ATTRIBUTE'
const APPEND_CHILD = 'APPEND_CHILD'
const REMOVE_CHILD = 'REMOVE_CHILD'
const REPLACE_CHILD = 'REPLACE_CHILD'
const INSERT_BEFORE = 'INSERT_BEFORE'
const CREATE_THUNK = 'CREATE_THUNK'
const UPDATE_THUNK = 'UPDATE_THUNK'
const DESTROY_THUNK = 'DESTROY_THUNK'

/**
 * Action creators for effectful things
 */

function createTextNode (text) {
  return {
    type: CREATE_TEXT_NODE,
    text
  }
}

function createElement (vnode) {
  return {
    type: CREATE_ELEMENT,
    vnode
  }
}

function setAttribute (node, name, value) {
  return {
    type: SET_ATTRIBUTE,
    node,
    name,
    value
  }
}

function removeAttribute (node, name) {
  return {
    type: REMOVE_ATTRIBUTE,
    node,
    name,
    value: null
  }
}

function appendChild (node, newChild) {
  return {
    type: APPEND_CHILD,
    node,
    oldChild: null,
    newChild
  }
}

function replaceChild (node, newChild, oldChild) {
  return {
    type: REPLACE_CHILD,
    node,
    oldChild,
    newChild
  }
}

function removeChild (node, oldChild) {
  return {
    type: REMOVE_CHILD,
    node,
    oldChild,
    // Set newChild to null to try to ensure that as many of these actions
    // have the same object shape as possible, which should allow v8
    // to optimize them a bit better
    newChild: null
  }
}

function insertBefore (node, newChild, oldChild) {
  return {
    type: INSERT_BEFORE,
    node,
    oldChild,
    newChild
  }
}

function createThunk (thunk) {
  return {
    type: CREATE_THUNK,
    thunk
  }
}

function updateThunk (thunk, prev) {
  return {
    type: UPDATE_THUNK,
    thunk,
    prev
  }
}

function destroyThunk (thunk) {
  return {
    type: DESTROY_THUNK,
    thunk
  }
}

/**
 * Exports
 */

const types = {
  CREATE_TEXT_NODE,
  CREATE_ELEMENT,
  SET_ATTRIBUTE,
  REMOVE_ATTRIBUTE,
  APPEND_CHILD,
  REPLACE_CHILD,
  REMOVE_CHILD,
  INSERT_BEFORE,
  CREATE_THUNK,
  UPDATE_THUNK,
  DESTROY_THUNK
}

export {
  createTextNode,
  createElement,
  setAttribute,
  removeAttribute,
  appendChild,
  replaceChild,
  removeChild,
  insertBefore,
  createThunk,
  updateThunk,
  destroyThunk,

  types
}
