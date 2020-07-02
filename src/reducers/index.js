import { combineReducers } from 'redux'

import temp from './reducer_temp'
import pages from './reducer_pages'

export default combineReducers({
  temp,
  pages
})