import React, { Component } from 'react'
import style from './styles/Landing.css'

export default class Landing extends Component {
  render() {
    return (
      <div className={`section`}>
      <div className={style.flex}>
        <div className={`backgroundTransition ${this.props.section === 'Home' ? 'blue' : 'black'} ${style.logo}`}></div>
        <div className={`backgroundTranstiion ${style.textContainer} transparent`}>
          <p className="MarkProBook">Building brands with <br/>AI and emerging tech</p>
        </div>
      </div>
      </div>
    );
  }
}
