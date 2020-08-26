import React, { useState, Fragment } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
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
  listItem: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  header: {
    color: '#fff',
    fontSize: '3rem',
    paddingBottom: '10%'
  }
}))

export default function Contacts() {
  const classes = useStyles()
  const [show] = useState(true)
  const TIME = 1000

  return (
    <div className="contacts-page">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Grow
              in={show}
              style={{ transformOrigin: '0 0 0' }}
              {...(show ? { timeout: TIME } : {})}
            >
              <h2 className={classes.header}>Contact</h2>
            </Grow>
          </ListSubheader>
        }
      >
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
            <ListItemText className={classes.listItem}>
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
            <ListItemText className={classes.listItem}>
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
