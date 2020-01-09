import React from "react";

class CountUp extends React.Component {
  // constructorは読み込まれたらとりあえず実行される部分
  constructor(props) {
    super(props);
    // stateを定義 オブジェクト形式で入れられる
    this.state = { count: 0 };
  }

  // State の countを変更するためのメソッドを定義
  countUp() {
    this.setState({ count: this.state.count + 1 });
  }

  // アロー関数を countDown に入れた場合の書き方
  countDown = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    // ここは普通のjsなのでコメント書けます（ return()の中だと{}が必要 ）
    console.log(this.state.count);
    //
    return (

      <div className="text-center mb-5">
        <h2>カウントアップ</h2>
        <h3>{this.state.count}</h3>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.countUp();
          }}
        >
          +
        </button>
        <button 
        className="btn btn-primary"
        onClick={this.countDown}
        >-</button>
      </div>
    );
  }
}

export default CountUp;
