import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root')

//Ex2-1 (8x4 table)

const isPrime = (n) => {
  if(n <= 1){
    return false
  }else if(n ==2){
    return true
  }else if(n%2==0){
    return false
  }
  for(var i=3; i<=Math.sqrt(n); i=i+2){
    if (n%i==0){
      return false
    }
  }
  return true
}

const CellBox = (props) => {
  let n = props.num
  if (isPrime(n)){
    return(
      <div className='cellBox' style={{backgroundColor: 'red'}}>
        <span>{props.num}</span>
      </div>
    )
  } else if(n%2==0){
    return(
      <div className='cellBox' style={{backgroundColor: 'green'}}>
        <span>{props.num}</span>
      </div>
    )
  } else if(n%2==1){
    return(
      <div className='cellBox' style={{backgroundColor: 'yellow'}}>
        <span>{props.num}</span>
      </div>
    )
  }
}

const CellRow = (props) => {
  let row = props.rowVals
  const myRow = row.map((r) => <td  key={r}><CellBox key={r} num={r} /></td>)
  return (
    <tr>
      {myRow}
    </tr>
  )
}

const CellTable = () => {
  return (
    <div>
      <h1>30 Days of React</h1>
      <h3>Number Generator</h3>
      <table className='myTable'>
        <tbody>
          <CellRow rowVals={Array.from(Array(8).keys())} />
          <CellRow rowVals={[8,9,10,11,12,13,14,15]} />
          <CellRow rowVals={[16,17,18,19,20,21,22,23]} />
          <CellRow rowVals={[24,25,26,27,28,29,30,31]} />
        </tbody>
      </table>
    </div>
  )
}


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
    <div className='cellBox' style={{backgroundColor: bcolor}}>
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
      <h1>30 Days of React</h1>
      <h3>Number Generator</h3>
      <table className='myTable'>
        <tbody>
          <HexCellRow rowVals={[hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor()]}/>
          <HexCellRow rowVals={[hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor()]}/>
          <HexCellRow rowVals={[hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor()]}/>
          <HexCellRow rowVals={[hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor()]}/>
        </tbody>
      </table>
    </div>
  )
}

export const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'USA', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russia', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

const populationPrettyNumber = (n) => {
  var num_parts = n.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}

const PopulationsTableRow = (props) => {
  let rows = props.data
  let worldPop = props.data[0].population

  const myRows = rows.map((r) => 
  <tr key={r.country}>
    <td>
      {r.country}
    </td>
    <td className='populationFill' style={{width:(r.population/worldPop)*500}}>
    </td>
    <td>
      {/* {r.population} */}
      {populationPrettyNumber(r.population)}
    </td>
  </tr>)

  return (
    myRows
  )
}

const PopulationsTable = () => {
  return (
    <div>
      <h1>30 Days of React</h1>
      <h3>World Population</h3>
      <p>Ten most  populated  countries</p>
      <table className='myTable'>
        <tbody>
          <PopulationsTableRow data={tenHighestPopulation} />
        </tbody>
      </table>
    </div>
  )
}



//Render everything
const App = () => {
  return (
    <div className='app'>
      <CellTable />
      <br />
      <HexCellTable />
      <br />
      <PopulationsTable />
    </div>
  )
}

ReactDOM.render(<App />, rootElement)