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
        pops: true,
        langs: false,
        topLangs: [],
        topPops: [],
    }
    top10Langs() {
        var toReturn = []
        var languages = []
        this.props.data.map((country) => {
            country.languages.forEach(element => {
                var temp = {langName: element.name, numOfCountry: 1}
                languages.push(temp)
            });
            return languages
        })

        languages.forEach(lang => {
            if(toReturn.length==0){
                toReturn.push(lang)
            } else {
                for(var i=0; i<toReturn.length; i++){
                    if(toReturn[i].langName == lang.langName){
                        toReturn[i].numOfCountry += 1
                        break
                    }
                    if(i==toReturn.length-1){
                        toReturn.push(lang) 
                    }
                }
            }
        })

        toReturn.sort((a,b) => b.numOfCountry-a.numOfCountry)
        toReturn = toReturn.slice(0, 10)

        this.setState({
            topLangs: toReturn
        })
        return toReturn
    }
    top10CountryPops() {
        var toReturn = []
        this.props.data.sort((a,b) => a.population-b.population)
        for(var i=0; i<10; i++){
            toReturn[i]=this.props.data[this.props.data.length-1-i]
        }
        this.setState({
            topPops: toReturn
        })
        return toReturn
    }
    showPopulation() {
        this.top10CountryPops()
        this.setState({
            pops: true,
            langs: false,
        })
    }
    showLanguages() {
        this.top10Langs()
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
                    <table>
                        <tbody>
                        {this.state.topPops.map((pop) => (
                            <tr key={pop.name}><td>{pop.name}</td><td>color</td><td>{pop.population}</td></tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return(
                <div className='top10Langs'>
                    <p>10 Most spoken languages in the world</p>
                    <table>
                        <tbody>
                        {this.state.topLangs.map((lang) => (
                            <tr key={lang.langName}><td>{lang.langName}</td><td>color</td><td>{lang.numOfCountry-1}</td></tr>
                        ))}
                        </tbody>
                    </table>
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