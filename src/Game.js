import Clock from './Clock';

function Game() {
    return (
        <div>
            Hello Wolrd
            <Clock date={new Date()} />
        </div>
    );
}

export default Game;

//  <Clock date={new Date()} />
// <h2>It is {this.props.date.toLocaleTimeString()}.</h2>