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
                <img src="https://cdn.discordapp.com/avatars/160941453671923722/ec280069971c9c5a6970636927fa7ea5.webp?size=128" alt="ProfilePicture"/>
                {INFORMATION.bio.map((line) => (
                  <p>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      )
    }
  }