import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { unmountComponentAtNode } from 'react-dom';

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexCell = (props) => {
  let bcolor = props.hexColor
  return(
    <div id={props.hexColor} className='cellBox' style={{backgroundColor: bcolor}} onClick={() => (document.getElementById(props.hexColor).style.display='none')}>
      <span>{props.hexColor}</span>
    </div>
  )
}

const HexCellRow = (props) => {
  let row = props.rowVals
  const myRow = row.map((r) => <td  key={r}><HexCell key={r} hexColor={r} /></td>)
  return (
    <tr>
      {myRow}
    </tr>
  )
}

const HexCellTable = () => {
  let arr = Array()
  return(
    <div>
      <table className='myTable'>
        <tbody>
          <HexCellRow name="row1" rowVals={[hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor()]}/>
          <HexCellRow id="row2" rowVals={[hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor()]}/>
          <HexCellRow id="row3" rowVals={[hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor()]}/>
          <HexCellRow id="row4" rowVals={[hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor()]}/>
        </tbody>
      </table>
    </div>
  )
}

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <br /><br /><br /><br /><br />
        <h2>Hexaecimal Colors</h2>
        <button onClick={() => window.location.reload(false)}>Generate</button>
        <HexCellTable />
        <button onClick={() => (ReactDOM.unmountComponentAtNode(document.getElementById('root')))}>Unmount the whole App</button>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
