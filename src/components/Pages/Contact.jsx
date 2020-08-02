import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grow,
} from '@material-ui/core/'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 360,
    //backgroundColor: theme.palette.background.paper,
    //width: '50%',
    //margin: '0 auto',
    // paddingTop: '10%',
    //color: '#fff',
  },
}))

export default function Contacts() {
  const classes = useStyles()
  const [show] = useState(true)
  const TIME = 1000

  return (
    <div className="contacts-page">
    <List>
      <Grow
        in={show}
        style={{ transformOrigin: '0 0 0' }}
        {...(show ? { timeout: TIME } : {})}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <MailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText>
            <a href="mailto:gregdd@outlook.com?subject=contact_from_website&body=Hello">
              gregdd@outlook.com
            </a>
          </ListItemText>
        </ListItem>
      </Grow>
      <Grow
        in={show}
        style={{ transformOrigin: '0 0 0' }}
        {...(show ? { timeout: TIME + 300 } : {})}
      >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <CopyToClipboard text="0422 347 204">
            <span>0422 347 204</span>
          </CopyToClipboard>
        </ListItemText>
      </ListItem>
      </Grow>
      <Grow
        in={show}
        style={{ transformOrigin: '0 0 0' }}
        {...(show ? { timeout: TIME + 600 } : {})}
      >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GitHubIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <a
            onClick={() =>
              window.open('https://github.com/GregatGit/', '_blank')
            }
          >
            Open my github page
          </a>
        </ListItemText>
      </ListItem>
      </Grow>
      <Grow
        in={show}
        style={{ transformOrigin: '0 0 0' }}
        {...(show ? { timeout: TIME + 900 } : {})}
      >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LinkedInIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <a
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/greg-duncan-458199108/',
                '_blank'
              )
            }
          >
            Open my linkedin page
          </a>
        </ListItemText>
      </ListItem>
      </Grow>
    </List>
    </div>
  )
}
