import React, { Component } from 'react'
import Logo from '../assets/logos/GreatMachineWhite.svg'
import style from './styles/Navigation.css'

export default class Navigation extends Component {
  render(){
    return(
      <div className={` burgerTransition ${style.container} ${this.props.openNav ? 'container-on' : ''}`}>
      <div className={`burgerMenu ${this.props.openNav? 'menu-on' : '' }`} onClick={e => this.props.toggleNav()}>
      <img src={Logo} alt="logo" className={`Logo ${this.props.openNav? 'showLogo' : 'hideLogo'}`}/>
        <div className={`burger1 burgerTransition ${this.props.openNav? 'menu-on' : '' }`}>
          <span className={`${this.props.openNav ? 'showLink' : 'hideLink'} ${style.listItem} Plaak`}>
            <a href='#Contact'>Get Started</a>
          </span>
        </div>

        <div className={`burger4 burgerTransition ${this.props.openNav? 'menu-on' : '' }`}>
          <span className={`${this.props.openNav ? 'showLink' : 'hideLink'} ${style.listItem} Plaak`}>
            <a href='#Brands'>Partners</a>
          </span>
        </div>
        
        <div className={`burger2 burgerTransition ${this.props.openNav? 'menu-on' : '' }`}>
          <span className={`${this.props.openNav ? 'showLink' : 'hideLink'} ${style.listItem} Plaak`}>
            <a href='#Thinking'>Services</a>
          </span>
        </div>
        
        <div className={`burger3 burgerTransition ${this.props.openNav? 'menu-on' : '' }`}>
          <span className={`${this.props.openNav ? 'showLink' : 'hideLink'} ${style.listItem} Plaak`}>
            <a href='#Projects'>Projects</a>
          </span>
        </div>
      
      </div>
      
      </div>
    )
  }
}
