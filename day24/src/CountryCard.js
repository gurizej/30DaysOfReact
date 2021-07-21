import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/main.css'

class CountryCard extends React.Component {
    constructor(props){
        super(props)
        this.state.countryData = props.countryData
        this.state.searchWord = props.searchWord
      }
    state = {
        countryData: [],
        searchWord: '',
    }
    beautifyPopulation = (population) => {
        //TODO: return population with the commas
        return population
    }
    beautifyLanguages = (languages) => {
        //TODO: return list of the languages as a string to display
    }
    beautifyCurrencies = (currencies) => {
        //TODO: return a legible format of the currencies
    }
    render() {
        if(this.state.searchWord === '') {
            return (
                <div className='countryCard'>
                    <img src={this.state.countryData.flag} alt={this.state.countryData.name} />
                    <h3 className='countryName'>{this.state.countryData.name}</h3>
                    <h3><b>Capital: </b>{this.state.countryData.capital}</h3>
                    {/* <h3><b>Language: </b>{this.state.countryData.languages}</h3> */}
                    <h3><b>Population: </b>{this.beautifyPopulation(this.state.countryData.population)}</h3>
                    {/* <h3><b>Currency: </b>{this.state.countryData.currencies}</h3> */}
                </div>
            )
        } else {
            // if(this.state.countryData.name === (this.state.searchWord)){
            if(this.state.countryData.name.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return (
                    <div className='countryCard'>
                        <img src={this.state.countryData.flag} alt={this.state.countryData.name} />
                        <h3 className='countryName'>{this.state.countryData.name}</h3>
                        <h3><b>Capital: </b>{this.state.countryData.capital}</h3>
                        {/* <h3><b>Language: </b>{this.state.countryData.languages}</h3> */}
                        <h3><b>Population: </b>{this.beautifyPopulation(this.state.countryData.population)}</h3>
                        {/* <h3><b>Currency: </b>{this.state.countryData.currencies}</h3> */}
                    </div>
                )
            }else {
                return(null)
            }
        }
        
    }
}

export default CountryCard