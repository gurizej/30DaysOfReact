import React from 'react';
import ReactDOM from 'react-dom';
import {countriesData} from './countries'

// Write number pretty
const populationPrettyNumber = (n) => {
    var num_parts = n.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}

class Country extends React.Component {
    constructor(props){
        super(props)
        this.state.flag = this.props.data.flag
        this.state.capital = this.props.data.capital
        this.state.language = this.props.data.languages.join(', ')
        this.state.population = populationPrettyNumber(this.props.data.population)
        this.state.currency = this.props.data.currency
    }
    state = {
        flag: 'https://restcountries.eu/data/alb.svg',
        capital: 'Tirana',
        language: 'Albanian',
        population: 2886026,
        currency: 'Albanian lek'
    }
    changeCountry = () => {
        let c = countriesData[Math.floor(Math.random() * countriesData.length)]
        this.setState({flag: this.state.flag = c.flag})
        this.setState({capital: this.state.capital = c.capital})
        this.setState({language: this.state.language = c.languages.join(', ')})
        this.setState({population: this.state.population = populationPrettyNumber(c.population)})
        this.setState({currency: this.state.currency = c.currency})
    }
    render() {
        return(
            <div className='mainCountryDiv'>
                <div className='innerMainCountryDiv'>
                    <img src={this.state.flag}></img>
                    <div className='countryInfo'>
                        <p><b>Capital:</b> {this.state.capital}</p>
                        <p><b>Language:</b> {this.state.language}</p>
                        <p><b>Population:</b> {this.state.population}</p>
                        <p><b>Currency:</b> {this.state.currency}</p>
                        
                    </div>
                </div>
                <br/>
                <button onClick={this.changeCountry}>Select Country</button>
            </div>
        )
    }
}

export default Country