import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root')

class Season extends React.Component {
  constructor(props){
    super(props)
    this.state.season = this.props.season
  }
  state = {
    season: 'spring'
  }
  render() {
    let seasonStatus

    switch (this.state.season){
      case 'spring':
        seasonStatus = <div className='colorDiv' style={{backgroundColor: 'orange'}}></div>
        break
      case 'winter':
        seasonStatus = <div className='colorDiv' style={{backgroundColor: 'teal'}}></div>
        break
      case 'fall':
        seasonStatus = <div className='colorDiv' style={{backgroundColor: 'red'}}></div>
        break
      case 'summer':
        seasonStatus = <div className='colorDiv' style={{backgroundColor: 'yellow'}}></div>
        break
    }
    return (
      <div className='seasonDiv'>
        <h1>Changing background color based on season</h1>
        {seasonStatus}
      </div>
    )
  }
}

class TimeOfDay extends React.Component {
  constructor(props){
    super(props)
    this.state.timeOfDay = this.props.timeOfDay
  }
  state = {
    timeOfDay: 'noon'
  }
  render() {
    let timeStatus

    switch (this.state.timeOfDay){
      case 'morning':
        timeStatus = <div className='colorDiv' style={{backgroundColor: 'blue'}}></div>
        break
      case 'noon':
        timeStatus = <div className='colorDiv' style={{backgroundColor: 'yellow'}}></div>
        break
      case 'evening':
        timeStatus = <div className='colorDiv' style={{backgroundColor: 'orange'}}></div>
        break
      case 'night':
        timeStatus = <div className='colorDiv' style={{backgroundColor: 'black'}}></div>
        break
    }
    return (
      <div className='seasonDiv'>
        <h1>Changing background color based on time of day</h1>
        {timeStatus}
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return(
      <div>
        <Season season ='winter' />
        <TimeOfDay timeOfDay='noon'/>
      </div>
    )
  }
}

ReactDOM.render(<App />, rootElement)
