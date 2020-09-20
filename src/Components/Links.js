import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';

class Link extends React.Component {
    render(){
      return(
        <a href={this.props.url}>
            <div className="Link">
                <img src={this.props.img}></img>
            </div>
        </a>
      )
    }
  }

export default class Links extends React.Component {
    render(){
      return(
        <ScrollableAnchor id={"Links"}>
          <div className="Link-container">
            <h1>Contact Me</h1>
            <div className="Link-div">
                <Link url="mailto:thomas.ryan1@ontariotechu.net" img="/img/mail.png"/>
                <Link url="https://github.com/ThomasJRyan" img="/img/github_dark.png"/>
                <Link url="https://www.linkedin.com/in/thomas-ryan-b9444b10b/" img="/img/linkedin.png"/>
            </div>
          </div>
        </ScrollableAnchor>
      )
    }
  }