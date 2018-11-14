import React, { Component } from 'react'
import style from './styles/About.css'

export default class About extends Component {
  render() {
    return (
      <div className={`section Section ${style.container}`}>
        <div className={`${style.textContainer}`}>
          <p className={`MarkProBook ${style.text}`}>We're an innovation studio that binds AI and human behavior to solve brand problems that traditional marketing cannot. We help companies develop AI strategies and create campaigns, products, and experiences that enhance people's relationships with intelligent machines and build dynamic brands.
          </p>
          <p className={`MarkProBook ${style.text}`} >AI isn’t just a means to a smarter analytics and media. It’s also a powerful brand building tool.</p>
        </div>
      </div>
    );
  }
}
