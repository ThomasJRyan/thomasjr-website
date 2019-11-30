import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';

class Skill extends React.Component {
    render(){
      return(
        <div className="Skill">
          <img src={this.props.url} alt={this.props.children}></img>
          <label>{this.props.children}</label>
        </div>
      )
    }
  }
  
export default class Skills extends React.Component {
    render(){
      return(
        <ScrollableAnchor id={'Skills'}>
        <div>
            <h1>Skills</h1>
            <div className="Skills-div">
                <div>
                    <h2>Languages/Frameworks</h2>
                    <div style={{backgroundColor: "#97DFFC"}}>
                    <Skill url="/img/python.png">Python</Skill>
                    <Skill url="/img/react.svg">React</Skill>
                    <Skill url="/img/lua.png">Lua</Skill>
                    <Skill url="/img/html.png">HTML5</Skill>
                    <Skill url="/img/css.png">CSS3</Skill>
                    <Skill url="/img/js.png">JavaScript</Skill>
                    <Skill url="/img/cs.png">C#</Skill>
                    <Skill url="/img/cpp.png">C++</Skill>
                    <Skill url="/img/rust.png">Rust</Skill>
                    </div>
                </div>
                <div style={{backgroundColor: "#858AE3"}}>
                    <h2>Tools</h2>
                    <div>
                    <Skill url="/img/bash.png">Bash</Skill>
                    <Skill url="/img/powershell.png">PowerShell</Skill>
                    <Skill url="/img/git.png">Git</Skill>
                    <Skill url="/img/github.png">GitHub</Skill>
                    <Skill url="/img/openstack.png">OpenStack</Skill> 
                    <Skill url="/img/photoshop.png">Photoshop</Skill>
                    <Skill url="/img/sqlite.png">SQLite</Skill>
                    <Skill url="/img/ubuntu.png">Ubuntu</Skill>
                    <Skill url="/img/manjaro.png">Manjaro</Skill>
                    </div>
                </div>
            </div>
        </div>
        </ScrollableAnchor>
      )
    }
  } 