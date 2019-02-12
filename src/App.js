import React, { Component } from 'react';
import './assets/css/app.css';
import {
  Header, Title, Statistics, Image,
} from './components/index.jsx';
import ImagesTest from './assets/images/1192646-planet-mars-wallpaper-2600-x-1600-4-k.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <div className="statistics">
          <Statistics
            parentBlockName={'statistics__km'}
            labelName={'Million-km-of-earth'}
            labelText={'Million km of earth'}
          >
            <span className="statistics__valueKm">100</span>
          </Statistics>
          <Statistics
            parentBlockName={'statistics__c'}
            labelName={'Temperature-on-the-p'}
            labelText={'Temperature on the planet'}
          >
            <span className="statistics__symbol_Decs">-</span>
            <span className="statistics__valueC">150</span>
            <div className="statistics__symbolContainer">
              <span className="statistics__symbolO">o</span>
              <span className="statistics__symbolC">C</span>
            </div>
          </Statistics>
          <Statistics
            parentBlockName={'statistics__mass'}
            labelName={'f-the-mass-of-the-E'}
            labelText={'Оf the mass of the Earth'}
          >
            <div className="statistics__valueMass">15</div>
            <div className="statistics__symbolMass">%</div>
          </Statistics>
        </div>
        <div className="images-container">
          <Image source={ImagesTest} name="Rectangle" />
          <Image source={ImagesTest} name="Rectangle" />
          <Image source={ImagesTest} name="Rectangle_plus" />
        </div>
      </div>
    );
  }
}

export default App;
