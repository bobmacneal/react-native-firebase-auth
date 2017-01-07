import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MainList from './components/MainList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>
      <Scene key="main">
        <Scene key="mainList" component={MainList} title="Items" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
