import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';
// import star from '../star.svg';

class Skill extends React.Component {
    render(){
      return(
        <div className="Skill">
          {/*this.props.star !== undefined && 
            // <img src="/img/star.svg" className="Star"/>
            <img src={star} className="Star"/>
          */}
          <img src={this.props.url} alt={this.props.children} className="Skill-logo"></img>

          <label>{this.props.children}</label>
        </div>
      )
    }
  }
  
export default class Skills extends React.Component {
    render(){
      return(
        <ScrollableAnchor id={'Skills'}>
        <div style={{backgroundColor: "var(--mid)", color: "black"}}>
            <div className="Skills-div">
                <div style={{backgroundColor: "var(--mid-light)"}}>
                    <h2>Languages/Frameworks</h2>
                    <div>
                    <Skill url="/img/python.png">Python</Skill>
                    <Skill url="/img/react.svg">React</Skill>
                    <Skill url="/img/lua.png">Lua</Skill>
                    <Skill url="/img/html.png">HTML5</Skill>
                    <Skill url="/img/css.png">CSS3</Skill>
                    <Skill url="/img/js.png">JavaScript</Skill>
                    <Skill url="/img/cs.png">C#</Skill>
                    <Skill url="/img/cpp.png">C++</Skill>
                    <Skill url="/img/rust.png">Rust</Skill>
                    <Skill url="/img/java.png">Java</Skill>
                    <Skill url="/img/flask.png">Flask</Skill>
                    </div>
                </div>
                <div style={{backgroundColor: "var(--light)"}}>
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
                    <Skill url="/img/apache.png">Apache2</Skill>
                    <Skill url="/img/nginx.png">Nginx</Skill>
                    </div>
                </div>
            </div>
        </div>
        </ScrollableAnchor>
      )
    }
  } 