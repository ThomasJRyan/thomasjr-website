import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';
import INFORMATION from '../Info.js'

export default class Blurb extends React.Component {
    render(){
      return(
        <ScrollableAnchor id={"Blurb"}>
          <div>
            <h1>About Me</h1>
            <div className="Blurb-div">
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