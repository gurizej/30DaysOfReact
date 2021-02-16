import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
    constructor(props){
        super(props)
    }
    getCurrentYear = () => {
        let now = new Date()
        return now.getFullYear()
    }
    render() {
        return(
            <footer>
                <div className='footer-wrapper'>
                <p>Copyright {this.getCurrentYear()}</p>
                </div>
            </footer>
        )
    }
}

export default Footer