import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state.numOfCountries = props.numOfCountries
      }
      state = {
        numOfCountries: 0,
      }

      render() {
        return (
          <div className='header'>
            <h1>World Countries Data</h1>
            <h3>Currently, we have {this.state.numOfCountries} countries</h3>
          </div>
        )
      }
}

export default Header