import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClose = () =>  {
    setAnchorEl(null)
  }

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick = {openMenu} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Menu
              id = "menu"
              anchorEl = {anchorEl}
              keepMounted
              open = {Boolean(anchorEl)}
              onClose = {handleClose}
              >
                <MenuItem component = { Link } to="/" onClick={handleClose}>Homepage</MenuItem>
                <MenuItem component = { Link } to="/AboutScreen" onClick={handleClose}>About</MenuItem>
                <MenuItem component = { Link } to="/GameScreen" onClick={handleClose}>Game</MenuItem>
              </Menu>
          <Typography variant="h5" className={classes.title}>
            Pokemon Collection Tracker
          </Typography>
          <Button component = { Link } to="/SignUp" color="inherit">Sign Up</Button>
          <Button component = { Link } to="/Login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
