import React from 'react';

export default class ToDo extends React.Component{

	// constructorは読み込まれたらとりあえず実行される部分
	constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ''
    };
  }

	onInput = (e) => {
    this.setState({
      name: e.target.value
    });
  }

	addTodo = () => {
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos, name]
    });
  }

	removeTodo = (index) => {
    const { todos, name } = this.state;
    this.setState({
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
