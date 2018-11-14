import React, { Component } from 'react'
import Logo from '../assets/logos/GreatMachine.svg'
import LineDesign from '../assets/images/LineDesign.png'
import style from './styles/Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='section'>
      <div className={`MarkProBook Section ${style.container}`}>
      {/*=============CONTENT CONTAINER==============*/}
        <div className={style.contentContainer}>
          <img src={LineDesign} alt="design"className={style.design}/>
          <p className={style.contentText}>Great minds think with machines</p>
        </div>

      {/*=============CONTACT FOOTER==============*/}
        <div className={style.footer}>
          <div className={style.contactInfo}>
              GREAT MACHINE &#169; 2018
              <br/>
              <a href="mailto:hello@greatmachine.com">
              hello@greatmachine.com</a>
          </div>

          <img src={Logo} alt="logo" className={`Logo ${style.logo}`}/>

          <div className={style.privacyPolicy}>
              Privacy Policy
              <br/>
              Terms & Conditions
          </div>
        </div>
      </div>
      </div>
    );
  }
}
