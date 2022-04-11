import React from 'react';
import Clock from './components/Clock';

class Game extends React.Component {

    render(){
        return (
            <div>
                Hello Wolrd
                <Clock/>
            </div>
        );
    }
}

export default Game;

//  <Clock date={new Date()} />
// <h2>It is {this.props.date.toLocaleTimeString()}.</h2>