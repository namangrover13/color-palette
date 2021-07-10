import React, { Component } from 'react';
import ColorBoxes from './ColorBoxes';


import '../Styles/Palette.css'
import Navbar from './Navbar';

class Palette extends Component {
    constructor(props){
        super(props);
        this.state={
            level : 800
        }
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level){
        this.setState({
            level 
        })
    }
    render() { 
        const boxes = this.props.palette.colors[this.state.level].map((color) => (
            <ColorBoxes background={color.hex} name={color.name} />
        ))
        return ( 
            <div className="Palette">

                <div className="Palette-navbar">
                    <Navbar level={this.state.level} changeLevel={this.changeLevel} />
                </div>

                {/* Color Boxes */}
                <div className="Palette-colors">
                    {boxes}
                </div>

                {/* Footer */}
            </div>
         );
    }
}
 
export default Palette;