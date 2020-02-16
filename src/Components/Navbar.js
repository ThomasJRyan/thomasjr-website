import React from 'react'

export default class Education extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         scrollpos: window.pageYOffset
    //     };
    //     this.updateScrollPos.bind(this)
    // }

    // componentDidMount() {
    //     // window.addEventListener('scroll', this.updateScrollPos)
    //     window.addEventListener('scroll', () => this.setState({scrollpos: window.pageYOffset / 0.8}))
    // }

    // updateScrollPos(event){
    //     console.log(window.pageYOffset)
    //     this.setState({
    //         scrollpos: window.pageYOffset
    //     })
    // }

    render(){
      return(
        <div className="Navigation-bar" >
            <a href="#Blurb">About Me</a>
            <p>|</p>
            <a href="#Education">Education</a>
            <p>|</p>
            <a href="#Skills">Skills</a>
            <p>|</p>
            <a href="#Links">Contact</a>
            <p>|</p>
            <a href="#Resume">Resume</a>
        </div>
      )
    }
  }