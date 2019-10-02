import React, { Component } from 'react';
import Box from './Box';
import { choice } from './helper';
import './ColorBox.css'

class ColorBox extends Component {
    static defaultProps = {
        boxNum: 16,
        colorList: ['#3D5A80', '#98C1D9', '#E0FBFC', '#EE6C4D', '#293241',
            '#1F0318', '#E5F2C9', '#7F534B', '#8C705F', '#1E1A1D']
    }
    
    render() {
        const colorBoxes = Array.from({ length: this.props.boxNum }).map(() => (
            <Box colors={this.props.colorList} />
        ));
        return <div className="ColorBox">
            {colorBoxes}
        </div>
    }
}

export default ColorBox;