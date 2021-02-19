import React from 'react';
import ReactDOM from 'react-dom';


class FunDiv extends React.Component {
    constructor(props){
        super(props)
        this.state.left = 0
        this.state.top = 0
    }
    state = {
        left: 0,
        top: 0,
	}


    randomNumGenerator = () => {
        return Math.floor(Math.random() * 800)
    }

    changeLocation = () => {
        this.setState({top: this.randomNumGenerator()})
        this.setState({left: this.randomNumGenerator()})
    }

    render () {
        var linkStyle = {top: this.state.top, left: this.state.left}
        return (
            <div className='funDiv' style={linkStyle} onMouseOver={this.changeLocation}>
                30 Days Of React
            </div>
        )
    }
}

export default FunDiv