import React from 'react';

export default class ToDo extends React.Component{

	// constructorは読み込まれたらとりあえず実行される部分
	constructor(props) {
    super(props);

		// stateを定義
    this.state = {
      todos: [], // 出力時にループする
      name: ''
    };
  }

	// 入力された内容 e で...
	onInput = (e) => {
    this.setState({
      // とりあえず state の name に入力された値を入れておく
      name: e.target.value
    });
  }

	//
	addTodo = () => {
    const { todos, name } = this.state;
    this.setState({
      // 配列 todos の項目に state に格納してあった name を追加 
      todos: [...todos, name]
    });
  }

  // 削除する番号 index を受け取る
	removeTodo = (index) => {
    const { todos, name } = this.state;
    this.setState({
      // 0から押された項目（index）まで と 押された項目の次（ndex + 1）以降の項目を結合
      // つまり押された項目のみ削除
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    });
  }

	render(){
		const { todos } = this.state;

    return (<div className="text-left">
			<div className="form-inline mb-5">
			  <div className="form-group mx-sm-3">
			    <input type="text" className="form-control" onInput={this.onInput} />
			  </div>
			  <button className="btn btn-primary" onClick={this.addTodo}>登録</button>
			</div>

      <table className="table">
			<tbody>
        {todos.map((todo, index) => <tr key={index}>
				<td>{todo}</td>
				<td className="text-right">
				<button className="btn btn-danger" onClick={() => { this.removeTodo(index) }}>削除</button>
				</td>
				</tr>)}
				</tbody>
      </table>
    </div>);
	}
}
