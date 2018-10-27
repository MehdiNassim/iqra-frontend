import React from 'react';
import './RightDrawer.css';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';
import TeacherMiniViewer from '../teacherMiniViewer/TeacherMiniViewer';
import PropTypes from 'prop-types';
import Logo from '../logo/Logo';

// TODO: Color only the selected one

const drawerWidth = 304;

const menuOptions = [
  { title: 'Home', icon: <HomeIcon />, link: './Teacher' },
  { title: 'Statistics', icon: <TrendingUpIcon />, link: './Statistics' },
  { title: 'Settings', icon: <SettingsIcon />, link: './Settings' },
];

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

const RightDrawer = props => {
  const { classes, teacher, appName } = props;
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Logo classToolbar={classes.toolbar} appName={appName} />
      <TeacherMiniViewer teacher={teacher} />
      <List>
        {menuOptions.map(option => (
          <Link className="link" to={option.link} key={option.title}>
            <ListItem button href={option.link} key={option.title}>
              <ListItemIcon style={{ color: '#166ef8' }}>{option.icon}</ListItemIcon>
              <ListItemText disableTypography primary={<Typography style={{ color: '#166ef8', fontWeight:700 }}>{option.title}</Typography>} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

RightDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  appName: PropTypes.string.isRequired,
  teacher: PropTypes.object,
};

RightDrawer.defaultProps = {
  teacher: undefined,
}



export default withStyles(styles)(RightDrawer);
