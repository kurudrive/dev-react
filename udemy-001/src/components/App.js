import React from "react";
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

class App extends React.Component {
  // reducer で行うのでconstructorは読み込まれたらとりあえず実行される部分


  render() {
    const props = this.props
    //
    return (

      <div className="text-center mb-5">
        <h2>カウントアップ</h2>
        <h3>value: {props.value}</h3>
        <button
          className="btn btn-primary"
          onClick={props.increment}
        >
          +
        </button>
        <button 
        className="btn btn-primary"
        onClick={props.decrement}
        >-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ value: state.count.value} )


// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ increment, decrement })


export default connect(mapStateToProps, mapDispatchToProps)(App);

