import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Switch from '@material-ui/core/Switch'
import WifiIcon from '@material-ui/icons/Wifi'
import BluetoothIcon from '@material-ui/icons/Bluetooth'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto'
  },
}))

export default function SwitchListSecondary() {
  const classes = useStyles()
  const [checked, setChecked] = useState(['wifi'])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <List
      subheader={<ListSubheader>Settings</ListSubheader>}
      className={classes.root}
    >
      <ListItem>
        <ListItemIcon>
          <WifiIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />      
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <BluetoothIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
      </ListItem>
    </List>
  )
}
