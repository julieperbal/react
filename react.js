import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Card from '.components/Card';
import recettes from './recettes';
import './indexx.css';

class App extends React.Component {
// CODE SOUS CONVENTION ES6
  state = {
    recettes
  };

  render() {
    // on souhaite que nos objets (states) soient traités comme un array (tableau)
    const cards = Object
                    .keys(this.state.recettes)
                    .map(key => <Card key={key} details={this.state.recettes[key]
                      } />);

    return(
      <div  className="box">
        <Header />
        <div className="cards">
          {cards}
        </div>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
);
