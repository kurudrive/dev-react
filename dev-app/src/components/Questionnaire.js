import React from 'react';

export default class Questionnaire extends React.Component{
  // constructorは読み込まれたらとりあえず実行される部分
  constructor(props) {
    super(props);
    // stateを定義 オブジェクト形式で入れられる
    this.state = { 
      newItemName:'',
      items: [
        {
          name:'Lightning',
          count: 0,
        },
      ]
    };
  }


	// とりあえず state の newItemName に入力された値を入れておく
	onInput = (e) => {
    this.setState({
      newItemName: e.target.value,
    });
  }

  // 項目追加処理
	addItem = () => {
    const { items, newItemName } = this.state;
    // 新しく追加するアイテム
    const newItem = 
      {
        name:newItemName,
        count: 1,
      };
    // state に 項目追加
    this.setState({
      // 配列 items の項目に state に格納してあった newItem を追加 
      items: [...items, newItem]
    });
  }

    // 削除する番号 index を受け取る
	removeItem = (index) => {
    const { items } = this.state;
    this.setState({
      // 0から押された項目（index）まで と 押された項目の次（ndex + 1）以降の項目を結合
      // つまり押された項目のみ削除
      items: [...items.slice(0, index), ...items.slice(index + 1)]
    });
  }

  // State の countを変更するためのメソッドを定義
  itemCountUp(index) {
    const { items }  = this.state;
    items[index].count ++;
    this.setState({ 
      items
    });
  }

  render() {
    // ここは普通のjsなのでコメント書けます

    const { items } = this.state;
   
    return (

      <div className="text-center mb-5">

      <div className="form-inline mb-5">
			  <div className="form-group mx-sm-3">
			    <input type="text" className="form-control" onInput={this.onInput} />
			  </div>
			  <button className="btn btn-primary" onClick={this.addItem}>登録</button>
			</div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {items.map((item, index) => {
          return (
          // ループ項目の一番外側は key がないとエラー吐く
          <tr key={index}>
            <td className="text-left">{item.name}</td>
            <td>{item.count}</td>
            <td>
            <button
              className="btn btn-primary"
              onClick={() => {
              this.itemCountUp(index);
              }}
              >
              +
              </button>
               </td>
               <td>
                <button className="btn btn-danger" onClick={() => { this.removeItem(index) }}>Delete</button>
            </td>
          </tr>
          )
        })}
        </tbody>
      </table>
      </div>
    );
  }
}
