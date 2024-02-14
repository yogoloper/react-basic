import React from 'react';
import './Square.css';

export class Square extends React.Component {
  render() {
    return (
      <button className='square' onClick={() => {
        console.log('click', this.props.value)
      }}>
        {this.props.value}
      </button>
    )
  }
}