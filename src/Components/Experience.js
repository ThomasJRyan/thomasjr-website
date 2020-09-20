import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';
import INFORMATION from '../Info.js'

export default class Experience extends React.Component {
    render(){
      return(
        <ScrollableAnchor id={"Experience"}>
          <div className="Experience-container">
            <h1>Experience</h1>
            <div className="Experience-div">
              <div style={{width: "80vmin", margin: "5vmin"}}>
                {INFORMATION.experience.map((line) => (
                  <div>{line}</div>
                ))}
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      )
    }
  }