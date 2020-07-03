const nameInitialState = [
  {
    name: 'Welcome',
    icon: 'fa-laugh',
    id: 'S'
  },
  {
    name: 'Skills',
    icon: 'fa-code',
  },
  {
    name: 'Projects',
    icon: 'fa-cogs',
  },
  {
    name: 'About',
    icon: 'fa-info-circle',
  },
  {
    name: 'Contact',
    icon: 'fa-envelope',
  },
]

export default (state = nameInitialState, action) => {
  return state
}