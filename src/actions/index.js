export const CHANGE_PAGE = 'CHANGE_PAGE'

export function changePage(index) {
  return {
    type: CHANGE_PAGE,
    payload: index
  }
}