import React, { Component } from 'react'
import Slider from'rc-slider'
import 'rc-slider/assets/index.css'
import '../Styles/Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <header className="Navbar">
                <div className="Navbar-logo">
                    <a href="#">UI Colors</a>
                </div>
                <div className="Navbar-slider-container">
                    <span>Level: {this.props.level}</span>
                    <div className="Navbar-slider">
                        <Slider defaultValue={this.props.level} min={100} max={900} onAfterChange={this.props.changeLevel} step={100} />
                    </div>
                </div>
                
            </header>
        )
    }
}

export default Navbar