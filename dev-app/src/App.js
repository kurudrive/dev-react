// Reactの読み込み
import React from 'react';
import logo from './logo.svg';

class App extends React.Component {

	// constructorは読み込まれたらとりあえず実行される部分
	constructor(props) {
    super(props);
    // stateを定義 オブジェクト形式で入れられる
    this.state = {name:'やまだたろう'}

  }

	// Stateを変更するためのメソッドを定義
  handleClick(name){
    this.setState({name: name});
  }

	// JSXを戻り値とするrenderメソッド
  render() {
		// ここは普通のjsなのでコメント書けます

    return (
			<div>
        {/* {} で js が使えるので、その中で /* でコメントが使える */}
        <h1>{this.state.name}</h1>
				 <button onClick={()=>{this.handleClick('やまだたろう')}}>やまだたろう</button>
				 <button onClick={()=>{this.handleClick('すずきはなこ')}}>すずきはなこ</button>
				{/* 画像の末尾は / がないとエラーになる */}
				<img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

// クラスをExport
export default App;
