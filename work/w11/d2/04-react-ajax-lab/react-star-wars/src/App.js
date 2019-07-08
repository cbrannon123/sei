import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import { getStarships } from './services/sw-api';
import StarshipPage from './components/StarshipPage/StarshipPage'

class App extends Component {

  state = {
    starships: []
  }

  async componentDidMount() {
    var starships = await getStarships();
    this.setState({ starships: starships.results });
    console.log(this.state)
  }

  render() {
    return (

      <Switch>
        <Route exact path='/' render={() =>
          this.state.starships.map((starship, idx) => {
            return (
              <Link to={`/ships/${idx}`} key={idx}>{starship.name}</Link>
            );
          })
        } />
        <Route
          exact
          path="/ships/:idx"
          render={props => <StarshipPage {...props} starship={this.state.starships}/>}
          
        />
      </Switch>
    )
  }

}

export default App;