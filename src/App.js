import React, { Component } from 'react'
import * as Section from './components/index.js'
import ReactFullPage from './components/Fullpage/fullpage-component'
import './components/styles/App.css'
import 'fullpage.js/vendors/scrolloverflow'

const FullpageWrapper = fullpageProps => (
  <ReactFullPage
  {...fullpageProps}
  render={({ state, fullpageApi }) => {
    return (
      <div>
        <Section.Landing
          section = {fullpageProps.destination.anchor}/>
        <Section.About/>
        <Section.Services
          section = {fullpageProps.destination.anchor}/>
        <Section.Projects
          showVideoPlayer = {fullpageProps.showVideoPlayer}/>
        <Section.Brands/>
        <Section.About2020/>
        <Section.Footer/>

      </div>
    );
  }}
/>);

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      fullpage: {
        callbacks: ['onLeave', 'afterResize'],
        callback: '',
        destination: {
          anchor: 'Home'
        },
        direction: '',
        initialized: false,
        origin: '',
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        scrollOverflow: true,
        anchors: ['Home', 'About', 'Services', 'Projects', 'Brands', 'About2020', 'Contact'],
        returnFullpageObject: this.returnObject.bind(this),
        showVideoPlayer: this.showVideoPlayer.bind(this)
      },
      openNav: false,
      isDesktop: false,
      isTouchDevice: false,
      showVideoPlayer: false,
      link: '',
      blueBackground: false,
      onLanding: true
    }
  }

  componentDidMount(){
    this.deviceCheck()
  }

  // Used in fullpage-component--returns object created in that component.
  returnObject(obj){
    // SetState for app
    this.setState({fullpage: obj})

    // Background State
    if (obj.destination.anchor === 'Brands' || obj.destination.anchor === 'Contact' || obj.destination.anchor === 'Services'){this.setState({blueBackground: true})}
    else {this.setState({blueBackground: false})}

    // Show AI
    if (obj.destination.anchor === 'Home') {
      this.setState({
        onLanding: true,
        onAbout: false
      })
    } else if (obj.destination.anchor === 'About') {
      this.setState({
        onLanding: false,
        onAbout: true
      })
    } else {
      this.setState({
        onLanding: false,
        onAbout: false
      })
    }

  }

  deviceCheck() {
    this.setState({
      isDesktop: window.innerWidth > 768
    })
    this.checkTouchDevice()
  }
p
  checkTouchDevice() {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/) !== null) {
      this.setState({
        isTouchDevice: true,
        openNav: false,
      })
    }
    else {this.setState({isTouchDevice: false})}
  }

  toggleNav(){
    this.setState({ openNav: !this.state.openNav })
  }

  showVideoPlayer(link){
    console.log('clicked')
    this.setState({
      showVideoPlayer: !this.state.showVideoPlayer,
      link: link
    })
  }

  closeVideoPlayer(){
    this.setState({showVideoPlayer: !this.state.showVideoPlayer})
  }

  render() {
    return (
      <div className={`App backgroundTransition 
      ${this.state.blueBackground ? 'blue': 'black'}
      ${this.state.onLanding ? 'onLanding' : (this.state.onAbout ? 'onAbout' : 'hideAI')}`}>
        <Section.Navigation
          showLogo={this.state.fullpage.destination.anchor === 'Home' || this.state.fullpage.destination.anchor === 'About' || this.state.fullpage.origin === '' ? true: false}
          toggleNav={this.toggleNav.bind(this)}
          openNav = {this.state.openNav}
          section = {this.state.fullpage.destination.anchor}/>
        <Section.VideoPlayer
          show={this.state.showVideoPlayer}
          close={this.closeVideoPlayer.bind(this)}
          link={this.state.link}/>
        <FullpageWrapper {...this.state.fullpage}/>
      </div>
    );
  }
}

export default App;
