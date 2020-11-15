import React from "react";

class CountUpMulti extends React.Component {
  // constructorは読み込まれたらとりあえず実行される部分
  constructor(props) {
    super(props);
    // stateを定義 オブジェクト形式で入れられる
    this.state = { 
      count: 0,
      items: [
        {
          name:'いしかわ',
          count: 0,
        },
        {
          name:'すずき',
          count: 1,
        },
      ]
    };
  }

  // State の countを変更するためのメソッドを定義
  itemCountUp(index) {

    // 呼び出された（クリックされた）らとりあえず items の値をstateから受け直し
    const { items }  = this.state;

    // const abc = 
    //   {
    //     name:'やまだ',
    //     count: 5,
    //   };

    // カウントの値を加算
    items[index].count ++;

    // state を上書きしなおし
    this.setState({ 
      // 配列自体を追加したい場合
      // items:[...items,abc]
      items
    });
  }

  render() {

    // ここは普通のjsなのでコメント書けます

    // state の中の配列である items を取得
    const { items } = this.state;
   
    return (

      <div className="text-center mb-5">

      <table className="table">
        <thead>
          <tr>
          <th>No</th>
            <th>品目</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
        { /*  
        map メソッドは新しい配列を作る...がここではループに使ってるだけ？
        items の中の要素(map内で item に格納)には name と count が入っている。
        indexは自動割り振り
        */ }
        {items.map((item, index) => {
          return (
          // ループ項目の一番外側は key がないとエラー吐く
          <tr key={index}>
            <th>{index}</th>
            <th>{item.name}</th>
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
          </tr>
          )
        })}
        </tbody>
      </table>
      </div>
    );
  }
}

export default CountUpMulti;
