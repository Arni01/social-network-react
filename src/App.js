import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initialiseApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './components/hoc/withSuspense';

const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer')
);
const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);
const UsersContainer = React.lazy(() =>
  import('./components/Users/UsersContainer')
);

class App extends Component {
  componentDidMount() {
    this.props.initialiseApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandleErros);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="App">
        <HeaderContainer />
        <Navbar />
        <div className="App-content">
          <Switch>
            <Redirect exact from="/" to="/profile" />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route path="/users" render={withSuspense(UsersContainer)} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
            <Route path="/login" component={Login} />
            <Route path="*" render={() => <div>404</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initialiseApp })(App);
