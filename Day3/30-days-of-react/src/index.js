import React from 'react'
import ReactDOM from 'react-dom'
import frogImgLocation from './imgs/frog.jpg'
import frontEndTech from './imgs/frontend_technologies.png'

const rootElement = document.getElementById('root')


const myName = "Guri Zejnullahi"
const currentDate = new Date()

const frogImg = (
  <div>
    <img src={frogImgLocation} alt='Frog Image' />
  </div>
)

const frontEndTechImg = (
  <div>
    <img src={frontEndTech} alt='Front End Technologies' />
  </div>
)

const myInfo = (
  <main>
    <div className="div-wwrapper">
      <h1>{myName}</h1>
      <p>Country: USA</p>
      <p>Title: Software Engineer</p>
      <p>Gender: M</p>
      <p>Email: myEmail@myEmail.com</p>
      <p>Phone Number: 123-123-1234</p>
      {frogImg}
      {frontEndTechImg}
    </div>
  </main>
)

const footer = (
  <footer>
    <div>
      Copyright {currentDate.getFullYear()}
    </div>
  </footer>
)

const app = (
  <div className="footer-wrapper">
    {myInfo}
    {footer}
  </div>
)

ReactDOM.render(app, rootElement)
