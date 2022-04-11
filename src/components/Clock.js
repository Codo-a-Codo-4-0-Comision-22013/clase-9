import React from 'react';

export default class Clock extends React.Component {

    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    //lo que esta dentro de este metodo corre luego de que se renderizo el componente
    componentDidMount() {
      //invoca a la funcion actualiza cada 1000 ms
      this.timer = setInterval( () => this.actualiza(), 1000 );
    }
  
    actualiza() {
      //actualiza el estado con el nuevo horario
      this.setState({
        date: new Date()
      });
    }

    render() {
      return (
        <div>
          <h1>The time is:</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }