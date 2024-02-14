import React from 'react';
import './Square.css';

export class Square extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     value: null,
  //   }
  // }
  render() {
    return (
      <button className='square' onClick={() => {
        // this.setState({value: 'X'})
        // console.log('click', this.props.value)
      }}>
        {/* {this.state.value} */}
        {this.props.value}
      </button>
    )
  }
}