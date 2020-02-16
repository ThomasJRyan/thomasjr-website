import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pdfWidth: (window.innerWidth <= 1409) ? window.innerWidth * 0.95 : window.innerWidth * 0.55
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.handleResize(this))
    }

    handleResize(ctx){
        if (window.innerWidth <= 1409) {
            ctx.setState({
                pdfWidth: window.innerWidth * 0.95
            })
        } else {
            ctx.setState({
                pdfWidth: window.innerWidth * 0.55
            })
        }
    }

    render(){
      return(
        <ScrollableAnchor id={"Resume"}>
          <div className="Resume-container">
            <Document file={{url: './files/Thomas_Ryan_Resume.pdf'}}
            onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={1} width={this.state.pdfWidth}/>
            </Document>
          </div>
        </ScrollableAnchor>
      )
    }
  }