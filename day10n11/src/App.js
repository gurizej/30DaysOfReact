import React from 'react';
import ReactDOM from 'react-dom';
import FunDiv from './FunDiv.js'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <FunDiv />
            </div>
        )
    }
}

export default App