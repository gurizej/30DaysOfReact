import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CatHeader from './CatHeader.js'
import CatCard from './CatCard.js'
import CatFooter from './CatFooter.js'
import headerStyles from './styles/main.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.countryButtons = this.countryButtons.bind(this)
    this.interestedCatCountry = this.interestedCatCountry.bind(this)
  }
  state = {
    data: [],
    selectedCountry: "ALL",
    originNumObject: [],
  }
  componentDidMount() {
    this.fetchCats()
  }
  fetchCats = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds'
    try{
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
    this.countryButtons()
  }
  countryButtons() {
    let originNum = []
    for(var i=0; i<this.state.data.length; i++) {
      if(originNum.length==0) {
        originNum.push({origin : this.state.data[i].origin, count : 1})
      } else {
        for(var j=0; j<originNum.length; j++) {
          if(originNum[j].origin == this.state.data[i].origin) {
            originNum[j].count += 1
            break
          }
          if(j==originNum.length-1) {
            originNum.push({origin : this.state.data[i].origin, count : 1})
            break
          }
        }
      }
    }
    this.state.originNumObject = originNum
    this.setState({
      originNumObject: originNum,
    })
  }
  interestedCatCountry = (catCountry) => {
    this.setState({
      selectedCountry: catCountry
    });
  }
  renderCats = () => {
    return (
    <div className='catsWrapper'>
      {this.state.data.map((cat) => (
          <CatCard key={cat.id+this.state.selectedCountry} catData={cat} origin={this.state.selectedCountry} />
      ))}
    </div>)
  }
  render() {
    return (
      <div className='App'>
        <CatHeader />
        <br />
        
        <div className='selectedCountryContainer'>
          {this.state.originNumObject.map((catCount) => (
            <button className='selectedCountry' key={catCount.origin} onClick={(e) => this.interestedCatCountry(catCount.origin)}>{catCount.origin} ({catCount.count})</button>
          ))}
          <button className='selectedCountry' key='ALL' onClick={(e) => this.interestedCatCountry("ALL")}>ALL ({this.state.data.length})</button>
        </div>
        {this.renderCats()}        
        <CatFooter />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)