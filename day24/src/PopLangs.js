import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/main.css'

class PopLangs extends React.Component {
    constructor(props){
        super(props)
        this.state.data = props.data
        this.showPopulation = this.showPopulation.bind(this)
        this.showLanguages = this.showLanguages.bind(this)
    }
    state = {
        data: [],
        pops: true,
        langs: false,
    }
    top10Langs() {
        //TODO: return top 10 languages spoken
        
    }
    top10CountryPops() {
        //TODO: return top 10 country pops
        
    }
    showPopulation() {
        this.setState({
            pops: true,
            langs: false,
        })
    }
    showLanguages() {
        this.setState({
            pops: false,
            langs: true,
        })
    }
    popsOrLangs() {
        if(this.state.pops == true) {
            return(
                <div className='top10Pops'>
                    <p>10 Most populated countries in the world</p>
                </div>
            )
        } else {
            return(
                <div className='top10Langs'>
                    <p>10 Most spoken languages in the world</p>
                </div>
            )
        }
    }
    render() {
        return (
            <div className='popLangs'>
                <div>
                    <button onClick={this.showPopulation}>POPULATION</button>
                    <button onClick={this.showLanguages}>LANGUAGES</button>
                </div>
                {this.popsOrLangs()}
            </div>
        )
    }
}

export default PopLangs