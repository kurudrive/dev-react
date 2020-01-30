import React from "react";
// connect関数をインポート
// connect 関数を使用して state action componet の関連付けをして処理する
import { connect } from 'react-redux'
// アクション関数をインポート
import { readEvents } from '../actions'

class EventsIndex extends React.Component {
  // reducer で行うのでconstructorは読み込まれたらとりあえず実行される部分

  // このコンポーネントが読み込まれた時に実行する処理
  componentDidMount(){
    this.props.readEvents()
  }

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

/*
mapStateToProps
stateの情報からこのcomponentに必要なものを取り出してcomponent内のpropsとしてマッピングする機能を持つ関数
引数には状態のトップレベルを示すstateを書いてどういったオブジェクトをpropsとして対応させるのかを関数の戻り値として定義
*/
const mapStateToProps = state => ({} )

/*
mapDispatchToProps
dispatch関数 : あるアクションが発生した時にReducerにタイプに応じた状態遷移を実行させる
*/

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ readEvents })


export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);

