import React from 'react';
import ReactDOM from 'react-dom';

import jsLogo from './imgs/javascript.png'
import html5Logo from './imgs/html5.png'
import reactLogo from './imgs/react.png'
import cssLogo from './imgs/css-3.png'
import verifiedImgLocation from './imgs/verified.jpg'

const rootElement = document.getElementById('root')
//Ex. 2-1
const Logo = (props) => (
    <div>
        <img src={props.logo} />
    </div>
)

//Ex. 2-2
const InputBox = (props) => (
    <input type={props.type} placeholder={props.placeholder}></input>
)

const Ex2Part2 = () => (
    <div className='ex2'>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <table className='formTable'>
        <tbody>
          <tr>
            <td>
              <InputBox type='text' placeholder='First name' />
            </td>
            <td>
              <InputBox type='text' placeholder='Last name' />
            </td>
            <td>
              <InputBox type='text' placeholder='Email' />
            </td>
          </tr>
        </tbody>
      </table>
      <button>Subscribe</button>
    </div>
)


//Ex. 3-1
const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
}

const HexaColor = (props) => {
    return (
      <div className='hexColorBlock' style={{backgroundColor: props.color}}>{props.color.toUpperCase()}</div>
    )
}


//Render everything
const App = () => (
    <div className='app'>
        <h2 style={{textAlign: 'center'}}>Front End Technologies</h2>
        <table>
            <tbody>
                <tr>
                <td>
                    <Logo logo={html5Logo} />
                </td>
                <td>
                    <Logo logo={cssLogo} />
                </td>
                <td>
                    <Logo logo={jsLogo} />
                </td>
                <td>
                    <Logo logo={reactLogo} />
                </td>
                </tr>
            </tbody>
        </table>
        <br />
        <Ex2Part2/>
        <br />
        <HexaColor color={hexaColor()} />
        <HexaColor color={hexaColor()} />
        <HexaColor color={hexaColor()} />
        <HexaColor color={hexaColor()} />
        <HexaColor color={hexaColor()} />
    </div>
)

ReactDOM.render(<App />, rootElement)