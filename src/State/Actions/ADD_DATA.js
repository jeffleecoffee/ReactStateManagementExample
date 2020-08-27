module.exports = (state, {data}) => {
  // Push does not create a new object whereas concat does. 
  // Creating a new object on action is more useful for subscribers because useContextSelector
  // detects new objects, but not appends to an array

  // state.data.push(data)
  state.data = state.data.concat(data)

  return {
    ...state
  }
}