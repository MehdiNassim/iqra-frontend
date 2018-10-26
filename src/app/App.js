import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import RightDrawer from '../rightDrawer/RightDrawer';
import Home from '../home/Home';
import NotFound from '../notFound/NotFound';
import Teacher from '../teacher/Teacher';
import Statistics from '../statistics/Statistics';
import Settings from '../settings/Settings';
import './App.css';

const appName = 'Iqra';
const teacher = {
  avatar:"https://pbs.twimg.com/profile_images/525778302540070913/_3-_wx3E_400x400.png",
  firstName: "Mehdi Nassim",
  lastName:"KHODJA"
};

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: red,
  },
  typography: {
    useNextVariants: true,
  },
});

// eslint-disable-next-line
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <RightDrawer appName={appName} teacher={teacher} />
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Home" component={Home} />
              <Route path="/Teacher" component={Teacher} />
              <Route path="/Statistics" component={Statistics} />
              <Route path="/Settings" component={Settings} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(theme)(App);
