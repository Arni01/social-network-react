import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Navbar />
      <div className="App-content">
        <Route path="/profile/:userId?" component={ProfileContainer} />
        <Route path="/dialogs" component={DialogsContainer} />
        <Route path="/users" component={UsersContainer} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={Login} />
      </div>
    </div>
  );
}

export default App;
