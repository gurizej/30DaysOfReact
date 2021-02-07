import React from 'react'
import ReactDOM from 'react-dom'
import myImgLocation from './imgs/Zejnullahi, Guri.jpg'
import verifiedImgLocation from './imgs/verified.jpg'

const rootElement = document.getElementById('root')


const myName = 'Guri Zejnullahi'
const title = 'Software Engineer'
const location = 'USA'
const skills = ['HTML', 'CSS', 'JS', 'React']

const myImage = (
  <div>
    <img src={myImgLocation} alt='Guri Zejnullahi' className='mainImg' />
  </div>
)

const verifiedImg = (
  <div>
    <img src={verifiedImgLocation} className='icon' />
  </div>
)


//for excersize 2
const exercise2 = (
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

const main = (
  <main>
    <div className='div-wrapper'>
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {exercise2}
    </div>
  </main>
)

const footer = (
  <footer>
    <div>
     Joined 2021
    </div>
  </footer>
)



const app = (
  <div>
    {main}
    {footer}
  </div>
)

ReactDOM.render(app, rootElement)
