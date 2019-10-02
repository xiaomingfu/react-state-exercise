import React, {Component} from 'react';
import './CoinSide.css';

class CoinSide extends Component{
    render(){
        return (
            <div className="CoinCide">
                <img src={this.props.info.imgUrl} alt={this.props.info.side} />
                
            </div>
        )
    }
}

export default CoinSide;