import React, { Component } from 'react';
import CoinCide from './CoinSide';

class Coin extends Component {
    static defaultProps = {
        head: "https://tinyurl.com/react-coin-heads-jpg",
        tail: "https://tinyurl.com/react-coin-tails-jpg",
    }
    constructor(props){
        super(props);
        this.state = {flip: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){

    }
    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                <CoinCide />
                <button onClick="handleClick">Flip Me</button>
                <p>Out of 1 flips, there have been 0 heads and 0 tails.</p>
            </div>
        )
    }
}

export default Coin;