import React from "react";
import Menu from '../Menu/Menu';
import Character from '../Character/Character';
import Intro from '../Intro/Intro';
import { Switch, Route } from 'react-router-dom';

const HomePage = props => {
    return (
    <div className="App">
      <h1>Swapi Router App</h1>
      <Menu moduleTitles={props.moduleTitles && props.moduleTitles} />
      <div>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/characters" component={Character} />
        </Switch>
      </div>
    </div>
  )
};

export default HomePage;
