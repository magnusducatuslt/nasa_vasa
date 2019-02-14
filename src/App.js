import React, { Component } from 'react';
import './assets/css/app.1.css';
import {
  Header, Title, Statistics, Image,
} from './components/index.jsx';
import ImagesTest from './assets/images/1192646-planet-mars-wallpaper-2600-x-1600-4-k.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title text={'Mars'} name={'Mars'} />
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
        <Title name={'Curiosity-Rover'} text={'Curiosity Rover'} />
        <Title
          name={'With-its-rover-named'}
          text={
            'With its rover named Curiosity, Mars Science Laboratory mission is part of NASA\'s Mars Exploration Program, a long-term effort of robotic exploration of the red planet. Curiosity was designed to assess whether Mars ever had an environment able to support small life forms called microbes. In other words, its mission is to determine the planet\'s "habitability."'
          }
        />
        <div className="images-container">
          <Image source={ImagesTest} name="Rectangle" />
          <Image source={ImagesTest} name="Rectangle" />
          <div className="Rectangle_plus">
          <Image source={ImagesTest} name="image-container__image" />
          <Title
          name={'image-container__plus'}
          text={"+"}
        />
          </div>
          
        </div>
        <Title
          name={'Mars-Science-Laborat'}
          text={"Mars Science Laboratory will study Mars' habitability"}
        />
        <Title
          name={'To-find-out-the-rov'}
          text={
            'To find out, the rover carries the biggest, most advanced suite of instruments for scientific studies ever sent to the martian surface. The rover will analyze samples scooped from the soil and drilled from rocks. The record of the planet\'s climate and geology is essentially "written in the rocks and soil" -- in their formation, structure, and chemical composition. The rover\'s onboard laboratory will study rocks, soils, and the local geologic setting in order to detect chemical building blocks of life (e.g., forms of carbon) on Mars and will assess what the martian environment was like in the past.'
          }
        />
      </div>
    );
  }
}

export default App;
