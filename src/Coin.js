import React, { Component } from 'react';
import CoinSide from './CoinSide';
import generate from '@babel/generator';
import {choice} from './helper';

class Coin extends Component {
    static defaultProps = {
        coins: [
            { side: "head", imgUrl: "https://tinyurl.com/react-coin-heads-jpg"},
            { side: "tail", imgUrl: "https://tinyurl.com/react-coin-tails-jpg"},
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            nFlip: 0,
            currCoin: null, 
            sideHead: 0,
            sideTail: 0
         };
        this.handleClick = this.handleClick.bind(this);
    }


    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return{
                    currCoin: newCoin,
                    nFlip: st.nFlip + 1,
                    sideHead: st.sideHead + (newCoin.side === 'head' ? 1 : 0),
                    sideTail: st.sideTail + (newCoin.side === 'tail' ? 1 : 0),
                };
        });
    }
    handleClick(e){
        this.flipCoin();
    };

    render() {
        return (
            <div className="Coin">
                <h1>Let's flip a coin!</h1>
                {this.state.currCoin && <CoinSide info={this.state.currCoin} />}
                <button onClick={this.handleClick}>Flip Me</button>
                <p>Out of {this.state.nFlip} flips, there have been {this.state.sideHead} heads and {this.state.sideTail} tails.</p>
            </div>
        )
    }
}

export default Coin;