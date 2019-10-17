import React from 'react';

class NameChange extends React.Component{

	// constructorは読み込まれたらとりあえず実行される部分
	constructor(props) {
    super(props);
    // stateを定義 オブジェクト形式で入れられる
    this.state = {name:'やまだたろう'}
  }

	// State の nameを変更するためのメソッドを定義
  nameChange(name){
    this.setState({name: name});
  }

	// コンポーネント生成時（ constructor のようにもともとあるメソッドっぽい ）
  componentDidMount() {
		console.log('コンポーネント生成時');
  }
  // コンポーネント更新時（ constructor のようにもともとあるメソッドっぽい ）
  componentDidUpdate() {
		console.log('コンポーネント更新時');
  }
  //コンポーネント消滅時（ constructor のようにもともとあるメソッドっぽい ）
  componentWillUnmount() {
		console.log('コンポーネント消滅時');
  }

	render(){
    return (
			<div className="text-center mb-5">
			<h2>{this.state.name}</h2>
			<p>ボタンを押すと上の名前がかわります</p>
			<div className="btn-group" role="group" aria-label="Basic example">
			 <button className="btn btn-primary" onClick={() => {this.nameChange('やまだたろう')}}>やまだたろう</button>
			 <button className="btn btn-primary" onClick={() => {this.nameChange('すずきはなこ')}}>すずきはなこ</button>
			</div>
			</div>
    )
  }
}

export default NameChange;
