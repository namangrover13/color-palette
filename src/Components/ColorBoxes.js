import React, { Component } from 'react';
import '../Styles/ColorBoxes.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'

class ColorBoxes extends Component {
    constructor(props){
        super(props);
        this.state={
            isCopied : false
        }
        this.toggleCopyState = this.toggleCopyState.bind(this);
    }
    toggleCopyState(){
        this.setState({isCopied : true}, ()=>{
            setTimeout(()=>this.setState({isCopied:false}), 1500)
        });
    }
    render() { 
        return ( 
            //Wrapping whole box inside CopyToClipboard so that clicking anywhere can make copy
            <CopyToClipboard text={this.props.background}>
                <div className="ColorBoxes" style={{background : this.props.background}} onClick={this.toggleCopyState}>
                    <div className={this.state.isCopied ? "ColorBoxes-overlay show" : "ColorBoxes-overlay"} style={{background : this.props.background}}></div> {/*Using separate div because we do not want to grow the contents of the div rather just the div*/}
                    <div className={this.state.isCopied ? "ColorBoxes-copy-msg show" : "ColorBoxes-copy-msg"}>
                        <h1>Copied!</h1>
                        <p>{this.props.background}</p>
                    </div>
                    <div className="ColoBoxes-container">
                        <div className="ColorBoxes-content">
                            <span className="ColorBoxes-name">{this.props.name}</span>
                        </div>
                        <button className="ColorBoxes-copy">Copy</button>
                    </div>
                    <span className="ColorBoxes-more">More</span>
                </div>
            </CopyToClipboard>
         );
    }
}
 
export default ColorBoxes;