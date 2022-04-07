import React from 'react';

export default class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>The time is:</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }