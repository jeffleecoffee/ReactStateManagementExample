module.exports = (state, {selectedIndex}) => {
  state.selectedIndex = selectedIndex

  return {
    ...state
  }
}