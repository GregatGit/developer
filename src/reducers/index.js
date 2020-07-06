import { combineReducers } from 'redux'

import page from './reducer_pageDisplayed'
import pages from './reducer_pages'

export default combineReducers({
  page,
  pages
})