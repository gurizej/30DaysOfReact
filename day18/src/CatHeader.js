import React from 'react';
import headerStyles from './styles/main.css'
import axios from 'axios';

class CatHeader extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        numOfBreeds: 0,
        avgWeight: 0,
        avgLifeSpan: 0
    }
    calculateWeight = (data) => {
        let total = 0
        data.map((cat) => {
            let all = cat.weight.metric.split("-")
            let thisCatsWeight = (Number(all[0])+Number(all[1]))/2
            total = total + thisCatsWeight
        })
        return (total/data.length).toFixed(2)
    }
    calculateLifeSpan = (data) => {
        let result = 0;
        data.map((cat) => {
            let all = cat.life_span.split("-")
            let thisCatsWeight = (Number(all[0])+Number(all[1]))/2
            result = result + thisCatsWeight
        })
        return (result/data.length).toFixed(2)
    }
    componentDidMount() {
        this.fetchCats()
    }
    fetchCats = async () => {
        const url = 'https://api.thecatapi.com/v1/breeds'
        try {
            const response = await axios.get(url)
            const data = await response.data
            this.setState({
                numOfBreeds: data.length,
                avgWeight: this.calculateWeight(data),
                avgLifeSpan: this.calculateLifeSpan(data),
            })
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div className='catHeader'>
                <h1>30 DAYS OF REACT</h1>
                <h2>Cats Paradise</h2>
                <h2>There are {this.state.numOfBreeds} cat breeds</h2>
                <h3>On average a cat can weigh about {this.state.avgWeight} Kg and lives {this.state.avgLifeSpan} years.</h3>
            </div>
        )
    }
}

export default CatHeader