/**
 * Action types
 */

const types = {
  CREATE_NODE: 'CREATE_NODE',
  UPDATE_NODE: 'UPDATE_NODE',
  REPLACE_NODE: 'REPLACE_NODE',
  REMOVE_NODE: 'REMOVE_NODE',
  INSERT_NODE: 'INSERT_NODE',
  CREATE_THUNK: 'CREATE_THUNK',
  UPDATE_THUNK: 'UPDATE_THUNK',
  DESTROY_THUNK: 'DESTROY_THUNK'
}

/**
 * Action creators for effectful things
 */

function vnodeAction (type) {
  return (vnode, prev) => ({
    type,
    vnode,
    prev
  })
}

const createNode = vnodeAction(types.CREATE_NODE)
const createThunk = vnodeAction(types.CREATE_THUNK)
const updateThunk = vnodeAction(types.UPDATE_THUNK)
const destroyThunk = vnodeAction(types.DESTROY_THUNK)

function nodeAction (type) {
  return (node, newNode, oldNode) => ({
    type,
    node,
    newNode,
    oldNode
  })
}

const updateNode = nodeAction(types.UPDATE_NODE)
const replaceNode = nodeAction(types.REPLACE_NODE)
const removeNode = nodeAction(types.REMOVE_NODE)

function insertNode (node, newNode, pos) {
  return {
    type: types.INSERT_NODE,
    node,
    newNode,
    pos
  }
}

/**
 * Exports
 */

export {
  createNode,
  insertNode,
  updateNode,
  replaceNode ,
  removeNode,
  createThunk ,
  updateThunk ,
  destroyThunk,

  types
}
