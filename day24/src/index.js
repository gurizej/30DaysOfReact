import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
import CountryCard from './CountryCard';
import PopLangs from './PopLangs';
import { Link, animateScroll} from 'react-scroll'

class App extends React.Component {
  constructor(props){
    super(props)
    this.updateSearchWord = this.updateSearchWord.bind(this)
  }
  state = {
    data: [],
    searchWord: "",
    numOfCountries: 0,
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
        numOfCountries: data.length
      })
    } catch (error) {
      console.log(error)
    }
  }
  updateSearchWord() {
    var sw = document.getElementById('searcher').value;
    this.setState({
      searchWord: sw,
    })
  }
  render() {
    return (
      <div className='App'>
        <Header numOfCountries={String(this.state.numOfCountries)} />
        <br /><br /><br /><br /><br /><br />
        <br />

        <Link activeClass="active" to="popLangs" spy={true} smooth={true} duration={500} ><button className='top10'>Top 10</button></Link>
        
        <br />
        <br />
        <input className='searcher' id='searcher' type='text' placeholder='Search Country' onChange={(e) => this.updateSearchWord()} ></input>


        <div className='countriesWrapper'>
          {this.state.data.map((country) => (
              <CountryCard key={country.name+"-"+this.state.searchWord} countryData={country} searchWord={this.state.searchWord} />
          ))}
        </div>

        <PopLangs data={this.state.data} />
        
        <Footer />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)