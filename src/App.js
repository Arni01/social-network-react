import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';

function App({ appState, dispatch }) {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="App-content">
        <Route
          path="/profile"
          render={() => (
            <Profile data={appState.profilePage} dispatch={dispatch} />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs data={appState.dialogsPage} dispatch={dispatch} />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
