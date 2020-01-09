import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import ArtTrackSharpIcon from '@material-ui/icons/ArtTrackSharp';
import Avatar from '@material-ui/core/Avatar';
import { indigo } from '@material-ui/core/colors';
import YouTube from '@u-wave/react-youtube';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  orange: {
    // color: theme.palette.getContrastText(deepOrange[500]),
    // backgroundColor: deepOrange[500],
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function SideDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            CryptoGallery
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        
        {open ? 
            <Avatar alt="Remy Sharp" src="/images/gilly.jpg" style={{ height: '200px', width: '200px', marginLeft: '20px', marginTop: '20px', marginBottom: '20px' }}/>
            : 
            <Avatar alt="Remy Sharp" src="" className={classes.orange} style={{ marginTop: '15px', marginBottom: '15px', marginLeft: '15px', marginRight: '5px' }}>
                G
            </Avatar>
        }
        
        <Divider />
        <List>
            <ListItem button key='wallet'>
                <ListItemIcon><AccountBalanceWalletOutlinedIcon /></ListItemIcon>
                <ListItemText primary='My Wallet' />
            </ListItem>

            <ListItem button key='collection'>
                <ListItemIcon><LibraryMusicOutlinedIcon /></ListItemIcon>
                <ListItemText primary="My Collection" />
            </ListItem>

            <ListItem button key='creations'>
                <ListItemIcon><ArtTrackSharpIcon /></ListItemIcon>
                <ListItemText primary='My Creations' />
            </ListItem>

            <ListItem button key='logout'>
                <ListItemIcon><ExitToAppOutlinedIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItem>
          {/* {['My Wallet', 'My Collection', 'My Creations', 'Logout'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemIcon><ExitToAppOutlinedIcon /></ListItemIcon>
              <ListItemIcon><AccountBalanceWalletOutlinedIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <YouTube
            video="jW40DVS1RsY"
            autoplay
            height='350px'
            width='500px'
        />
        <YouTube
            video="jW40DVS1RsY"
            autoplay
            style={{ marginLeft: '100px' }}
            height='350px'
            width='500px'
        />
      </main>
    </div>
  );
}
