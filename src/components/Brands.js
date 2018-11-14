import React, { Component } from 'react';
import * as logo from '../assets/logos/index.js'
import style from './styles/Brands.css'

export default class Brands extends Component {
  render() {
    return (
      <div className={`section Section ${style.container}`}>
        <div>
          <h1 className={`MarkProBook ${style.header}`}>A few partners we work with</h1>
        </div>
        <div className={`${style.aligner}`}>
            <div className={style.logoContainer}>
              <img src={logo.VW} alt="logo" className={style.VW}/>
              <img src={logo.TacoBell} alt="logo" className={style.TacoBell}/>
              <img src={logo.Target} alt="logo" className={style.Target}/>
              <img src={logo.ABInBev} alt="logo" className={style.ABinBev}/>
              <img src={logo.Adidas} alt="logo" className={style.Adidas}/>
            </div>
            <button className={`Plaak Button ${style.button}`} onClick = { e => {window.location = 'mailto:hello@greatmachine.com'}}>get in touch</button>
        </div>
      </div>
    );
  }
}
