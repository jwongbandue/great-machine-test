import React, { Component } from 'react'
import * as images from '../assets/images/index'
import style from './styles/Projects.css'

export default class Projects extends Component {
  render() {
    return (
      <div className={`section Section ${style.container}`}>
        <div>
          <h1 className={`MarkProBook ${style.Header}`}>Featured Projects</h1>
        </div>
        <div className={style.ProjectAligner}>
          <div className={`ProjectContainer ${style.ProjectContainer} left`}>
            {/* ============TARGET ============ */}
              <div className={style.Project}>
                <img src={images.Target} alt="project" className={style.ProjectImage}/>
                <h2 className={`Plaak ${style.ProjectTitle}`}>College Stylist</h2>
                <p className={`MarkProBook ${style.ProjectText}`}>We created a Kikbot with Target to help style your dorm</p>
                <button className="Plaak Button" onClick={e => {this.props.showVideoPlayer('https://player.vimeo.com/video/135196147?api=1&amp;player_id=projects-collegeStyler')}}>watch video</button>
              </div>

            {/* ============VW ============ */}
              <div className={style.Project}>
                <img src={images.VW} alt="project" className={style.ProjectImage}/>
                <h2 className={`Plaak ${style.ProjectTitle}`}>Unleash your RRR</h2>
                <p className={`MarkProBook ${style.ProjectText}`}>We launched the Golf R and AI that lets you be a kid again</p>
                <button className="Plaak Button" onClick={e=> {this.props.showVideoPlayer('https://player.vimeo.com/video/291970061?api=1&amp;player_id=projects-VW')}}>watch video</button>
              </div>

            {/* ============TACOBELL ============ */}
              <div className={style.Project}>
                <img src={images.Tacobot} alt="project" className={style.ProjectImage}/>
                <h2 className={`Plaak ${style.ProjectTitle}`}>Tacobot</h2>
                <p className={`MarkProBook ${style.ProjectText}`}>A cheeky Slack bot for groups ordering Taco Bell</p>
                <button className="Plaak Button" onClick={e=> {this.props.showVideoPlayer('https://player.vimeo.com/video/264531692?api=1&amp;player_id=projects-taco')}}>watch video</button>
              </div>
          </div>
        </div>

      </div>
    );
  }
}
