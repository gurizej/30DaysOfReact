import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './Header.js'
import {
  TiGift,
} from 'react-icons/ti'
import headderStyles from './styles/main.css'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    data: [],
  }
  makeAxiosCall = () =>{
    const API_URL = 'https://restcountries.eu/rest/v2/all'
    axios
      .get(API_URL)
      .then((response) => {
        this.setState({
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  renderKosovo = () => {
    let countryName
    let countryFlag
    return this.state.data.map((country) => {
      countryName = country.name
      countryFlag = country.flag
      if(countryName === 'Republic of Kosovo') {
        return(
          <div key={countryName}>
            {countryName}
            <br />
            <img src={countryFlag} alt={countryName} />{' '}
          </div>
        )
      }
    })
    
  }
  render() {
    return(
      <div>
        <Header />
        <br />
        
        <button onClick={this.makeAxiosCall}><TiGift /> Make call</button>
        <br />
        <br />
        <div>{this.renderKosovo()}</div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
