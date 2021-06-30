import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/main.css'

class Footer extends React.Component {
    constructor(props){
        super(props)
      }
      render() {
        return (
          <div className='footer'>
            <h1>Footer stuff here</h1>
          </div>
        )
      }
}

export default Footer