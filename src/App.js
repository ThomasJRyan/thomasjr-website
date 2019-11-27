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
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png">Python</Skill>
          <Skill url="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png">C++</Skill>
          <Skill url="https://cdn.worldvectorlogo.com/logos/react.svg">React</Skill>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/8/82/C_Sharp_logo.png">C#</Skill>
          <Skill url="http://logo-load.com/uploads/posts/2016-02/1456125746_logo-ubuntu.png">Ubuntu</Skill>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png">PowerShell</Skill>
          <Skill url="https://dwglogo.com/wp-content/uploads/2018/03/SQLite_Vector_logo.png">SQLite</Skill>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png">Rust</Skill>
          <Skill url="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png">Git</Skill>
          <Skill url="https://cdn.freebiesupply.com/logos/large/2x/github-icon-logo-png-transparent.png">GitHub</Skill>
          <Skill url="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png">HTML5</Skill>
          <Skill url="https://verekia.com/_pages/css3/introduction-css3/img/css3-logo.png">CSS3</Skill>
          <Skill url="https://cdn.worldvectorlogo.com/logos/javascript-1.svg">JavaScript</Skill>
          <Skill url="https://media.discordapp.net/attachments/276385071424995330/649338771770179645/512x512.png">Bash</Skill>
          <Skill url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Manjaro-logo.svg/1024px-Manjaro-logo.svg.png">Manjaro</Skill>
          <Skill url="/img/logo_white.png">Test</Skill>
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
