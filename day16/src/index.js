import React from 'react';
import ReactDOM from 'react-dom';


const Button = ({ onClick, text, style}) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  )
}

const buttonWithStyle = (CompParam) => {
  const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: '10px 25px',
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
  }
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />
  }
}
const NewButton = buttonWithStyle (Button)

const Span = ({text, style}) => {
  return (
    <span style={style}>
      {text}
    </span>
  )
}

//Creating different component with same higher component
const NewSpan = buttonWithStyle(Span)

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className='App'>
        <Button text='No Style' />
        <NewButton text='Styled Button' />
        <Span text='Regular span' />
        <NewSpan text='Styled Span' />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)