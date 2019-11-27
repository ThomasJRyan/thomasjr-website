import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import INFORMATION from './Info.js'

class Title extends React.Component {
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

class Blurb extends React.Component {
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

class Skills extends React.Component {
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
              <Skill url="/img/ubuntu.png">Ubuntu</Skill>
              <Skill url="/img/manjaro.png">Manjaro</Skill>
              <Skill url="/img/bash.png">Bash</Skill>
              <Skill url="/img/powershell.png">PowerShell</Skill>
              <Skill url="/img/git.png">Git</Skill>
              <Skill url="/img/github.png">GitHub</Skill>
              <Skill url="/img/openstack.png">OpenStack</Skill> 
              <Skill url="/img/photoshop.png">Photoshop</Skill>
              <Skill url="/img/sqlite.png">SQLite</Skill>
            </div>
          </div>
          </div>
      </div>
      </ScrollableAnchor>
    )
  }
} 

// class Skills extends React.Component {
//   constructor(){
//     super();
//     this.state = {windowWidth: null}
//   }
//   componentDidMount(){
//     window.addEventListener("resize", () => {
//       this.setState({windowWidth: window.innerWidth});
//     })
//   }
//   render(){
//     if (window.innerWidth >= 1000) {
//       return(
//         <ScrollableAnchor id={'Skills'}>
//           <div className="Skills-div">
//             <p>Larger than 1000px</p>
//           </div>
//         </ScrollableAnchor>
//     )} else {
//       return(
//         <ScrollableAnchor id={'Skills'}>
//           <div className="Skills-div">
//             <p>Smaller than 1000px</p>
//           </div>
//         </ScrollableAnchor>
//       )}
//   }
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://wallpaperplay.com/walls/full/5/6/7/292445.jpg" alt="" className="test"></img>
        <Title/>
        <Blurb/>
        <Skills/>
      </header>
    </div>
  );
}

export default App;
