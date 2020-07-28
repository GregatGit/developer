import { CHANGE_PAGE } from '../actions'

export const pageDisplayed = (state = 2, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.payload
    default:
      return state
  }
}

export default pageDisplayed