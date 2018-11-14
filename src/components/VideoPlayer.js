import React, { Component } from 'react'
import style from './styles/VideoPlayer.css'
import close from '../assets/images/close-icon.png'

export default class VideoPlayer extends Component {
  render() {
    if (this.props.show){
      return (
        <div className={`Section ${style.container}`}>
          <iframe title='video' className={style.video} src={this.props.link}></iframe>
          <div className={style.background}>
              <img alt="close" src={close} onClick={e => {this.props.close('')}} className={style.close}/>
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}
