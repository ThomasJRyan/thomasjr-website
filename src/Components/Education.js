import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';
import INFORMATION from '../Info.js'

export default class Education extends React.Component {
    render(){
      return(
        <ScrollableAnchor id={"Education"}>
          <div className="Education-container">
            <h1>Education</h1>
            <div className="Education-div">
              <div style={{width: "80vmin", margin: "5vmin"}}>
                {INFORMATION.education.map((line) => (
                  <div>{line}</div>
                ))}
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      )
    }
  }