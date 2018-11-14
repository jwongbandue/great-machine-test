import React, { Component } from 'react'
import Twenty from '../assets/logos/2020.svg'
import style from './styles/About2020.css'

export default class About2020 extends Component {
  render() {
    return (
      <div className={`section`}>
        <div className={`Section ${style.container}`}>
          <div className={`${style.grid}`}>
            <div className={style.textContainer}>
              <p className={`MarkProBook ${style.text}`}>Our 20/20 program is a 20-day sprint to assess your business and output a strategy inclusive of key briefing documents that detail how Al can create business change for your brand. It's an actionable plan for bringing Al to your business using easy-to-understand language. If you've worked with an insight-led creative agency or innovation consultancy, our strategic process with feel familiar.</p>
            </div>

              <img src={Twenty} alt="Twenty/twenty" className={`${style.logo}`} />
              <button className={`${style.button} Button Plaak`} onClick={e => { window.location = 'mailto:hello@greatmachine.com' }}>Get In Touch</button>

          </div>
        </div>
      </div>
    );
  }
}
