import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';
import INFORMATION from '../Info.js'

export default class Blurb extends React.Component {
    render(){
      return(
        <ScrollableAnchor id={"Blurb"}>
          <div style={{backgroundColor: "var(--mid-dark)"}}>
            <h1>About Me</h1>
            <div className="Blurb-div">
              <img src="/img/goofy.jpeg" alt=""></img>
              <div style={{width: "100vmin", margin: "5vmin"}}>
                {INFORMATION.bio.map((line) => (
                  <div>{line}</div>
                ))}
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      )
    }
  }