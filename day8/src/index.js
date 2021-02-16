import React from 'react';
import ReactDOM from 'react-dom';
import {countriesData} from './countries'
import Footer from './footer'
import Country from './country'

const rootElement = document.getElementById('root')



class App extends React.Component {
  state = {
    country: countriesData[Math.floor(Math.random() * countriesData.length)]
  }

  render() {
    return(
      <div>
        <h1>Select a Country for your next holiday</h1>
        <Country data={this.state.country} />
      </div>
    )
  }
}

ReactDOM.render(<App />, rootElement)