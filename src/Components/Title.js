import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';

export default class Title extends React.Component {
    render(){
      return(
        <ScrollableAnchor id={"Title"}>
          <div className="Title-div">
            <p style={{margin: 0, fontSize: "12vmin", borderBottom: "10px solid white", paddingBottom: "20px"}}>Thomas Ryan</p>
            <p style={{margin: 0, fontSize: '6vmin', margin: "20px 0 60px 0"}}>Network and IT Security</p>
            <div>
              <a href="#Blurb">About Me</a>
              <p>|</p>
              <a href="#Skills">Skills</a>
            </div>
          </div>
        </ScrollableAnchor>
      )
    }
  }