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
