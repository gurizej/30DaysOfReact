import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
import CountryCard from './CountryCard';
import PopLangs from './PopLangs';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    data: [],
    searchWord: "",
  }
  componentDidMount() {
    this.fetchCountries()
  }
  fetchCountries = async () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    try{
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div className='App'>
        <Header numOfCountries='250' />
        <br /><br /><br /><br /><br /><br />

        {/* <div className='countriesWrapper'>
          {this.state.data.map((country) => (
              <CountryCard key={country.name+"-"+this.state.searchWord} countryData={country} searchWord={this.state.searchWord} />
          ))}
        </div> */}
        <PopLangs data={this.state.data} />
        <Footer />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)