// Reactの読み込み
import React from 'react';
import logo from './logo.svg';

class App extends React.Component {

	// constructorは読み込まれたらとりあえず実行される部分
	constructor(props) {
    super(props);
    // stateを定義 オブジェクト形式で入れられる
    this.state = {name:'やまだたろう',count:0}
  }

	// State の nameを変更するためのメソッドを定義
  nameChange(name){
    this.setState({name: name});
  }
	// State の countを変更するためのメソッドを定義
	countUp(){
    this.setState({count: this.state.count +1 });
  }

	// JSXを戻り値とするrenderメソッド
  render() {
		// ここは普通のjsなのでコメント書けます

    return (
			<div>
        {/* {} で js が使えるので、その中で /* でコメントが使える */}
				<div class="container">
				{/* 画像の末尾は / がないとエラーになる */}

				<img src={logo} className="App-logo" alt="logo" />

				<div className="text-center mb-5">
        <h2>{this.state.name}</h2>
				<p>ボタンを押すと上の名前がかわります</p>
				<div className="btn-group" role="group" aria-label="Basic example">
				 <button className="btn btn-primary" onClick={() => {this.nameChange('やまだたろう')}}>やまだたろう</button>
				 <button className="btn btn-primary" onClick={() => {this.nameChange('すずきはなこ')}}>すずきはなこ</button>
				</div>
				</div>



				<div className="text-center">
				<h2>カウントアップ</h2>
				<h3>{this.state.count}</h3>
				 <button className="btn btn-primary" onClick={() => {this.countUp()}}>+</button>
				</div>
				</div>
      </div>
    );
  }
}

// クラスをExport
export default App;
