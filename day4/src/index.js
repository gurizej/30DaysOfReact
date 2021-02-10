import React from 'react';
import ReactDOM from 'react-dom';

import jsLogo from './imgs/javascript.png'
import html5Logo from './imgs/html5.png'
import reactLogo from './imgs/react.png'
import cssLogo from './imgs/css-3.png'
import myImgLocation from './imgs/Zejnullahi, Guri.jpg'
import verifiedImgLocation from './imgs/verified.jpg'

const rootElement = document.getElementById('root')

const JavaScriptLogo = () => (
  <div>
    <img src={jsLogo}/>
  </div>
)

const Html5Logo = () => (
  <div>
    <img src={html5Logo}/>
  </div>
)

const ReactLogo = () => (
  <div>
    <img src={reactLogo}/>
  </div>
)

const CssLogo = () => (
  <div>
    <img src={cssLogo}/>
  </div>
)

//////////////////////////////////////////////////////////////////////////
//Exercise 2-2
const Ex2Part2 = () => (
  <div className='ex2'>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates.</p>
    <table className='formTable'>
      <tbody>
        <tr>
          <td>
            <input type='text' placeholder='First name'></input>
          </td>
          <td>
            <input type='text' placeholder='Last name'></input>
          </td>
          <td>
            <input type='text' placeholder='Email'></input>
          </td>
        </tr>
      </tbody>
    </table>
    <button>Subscribe</button>
  </div>
)

//////////////////////////////////////////////////////////////////////////
//Exercise 3-1
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

// const HexaColor = () => (<div>{hexaColor()}</div>)

const HexaColor = () => {
  let bcolor = hexaColor()
  return (
    <div className='hexCols' style={{backgroundColor: bcolor}}>{bcolor.toUpperCase()}</div>
  )
}

//////////////////////////////////////////////////////////////////////////
//Exercise 3-2
const myImage = (
  <div>
    <img src={myImgLocation} alt='Guri Zejnullahi' className='mainImg' />
  </div>
)

const verifiedImg =  (
  <div>
    <img src={verifiedImgLocation} className='icon' />
  </div>
)

const myName = 'Guri Zejnullahi'
const title = 'Software Engineer'
const location = 'USA'

const UserCard = () => (
  <div className='userCard'>
      {myImage}
      <table>
        <tbody>
          <tr>
            <td><h2>{myName}</h2></td>
            <td>{verifiedImg}</td>
          </tr>
        </tbody>
      </table>
      <p>{title}, {location}</p>
      <h4>Skills:</h4>
      <span>HTML</span> <span>CSS</span> <span>JS</span> <span>React</span>
    </div>
)



//////////////////////////////////////////////////////////////////////////
//Render everything
const App = () => (
  <div className='app'>
    <h2 className='fetTitle'>Front End Technologies</h2>
    <table>
      <tbody>
        <tr>
          <td>
            <Html5Logo />
          </td>
          <td>
            <CssLogo />
          </td>
          <td>
            <JavaScriptLogo />
          </td>
          <td>
            <ReactLogo />
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <Ex2Part2 />
    <br />
    <HexaColor/>
    <HexaColor/>
    <HexaColor/>
    <HexaColor/>
    <HexaColor/>
    <br />
    <UserCard />
  </div>
)

ReactDOM.render(<App />, rootElement)



