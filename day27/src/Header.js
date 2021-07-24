import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/main.css'


class Header extends React.Component {
    constructor(props){
        super(props)
      }

      render() {
        return (
            <div className='header'>
                <h1>30 Days of React</h1>
            </div>
        )
      }
}

export default Header