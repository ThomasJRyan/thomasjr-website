import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';

class FlashingString extends React.Component {
  render(){
    this.tmp = 0;
    return(
      <div>
        {
          this.props.children.split("").map(chr => {
            if (chr === " "){
              return(<span style={{opacity:0}}>'</span>)
            }
            this.tmp = this.tmp + 100;
            return(
              <span style={{animationDelay: this.tmp + "ms"}} className="Flicker">{chr}</span>
            )
          })
        }
      </div>
    )
  }
}

class Circle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      duration: 1 / (props.num),
      count: [...Array(props.num).keys()]
    }
  }
  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({duration: 8})
    // }, 1000)
  }
  render(){
    return(
      <div className="Circle">
        <div>
          {
            this.state.count.map(delay => {
              console.log(delay);
              return(
                <div style={{
                  animationDelay: this.state.duration + "s",
                  animationDuration: delay+5 + "s",
                  width: 20,
                  height: Math.random() * 50 + 500,
                }}></div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default class Title extends React.Component {
    render(){
      return(
        <ScrollableAnchor id={"Title"}>
          <div className="Title-div">
            {/*<Circle num={16}/>*/}
            <div style={{zIndex: 5, width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
              <p style={{margin: 0, fontSize: "12vmin", borderBottom: "10px solid white", paddingBottom: "20px"}}>
                <FlashingString>Thomas Ryan</FlashingString>
              </p>
              <p style={{margin: 0, fontSize: '6vmin', margin: "20px 0 60px 0"}}>
                Network and IT Security
              </p>
              <div>
                <a href="#Blurb">About Me</a>
                <p>|</p>
                <a href="#Education">Education</a>
                <p>|</p>
                <a href="#Skills">Skills</a>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      )
    }
  }