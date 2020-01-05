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
  countUp() {
    this.setState({ count: this.state.count + 1 });
  }
  itemCountUp(index) {
    const { items }  = this.state;
    // const abc = 
    //   {
    //     name:'やまだ',
    //     count: 5,
    //   };
    items[index].count ++;
    this.setState({ 
      // 配列自体を追加したい場合
      // items:[...items,abc]
      items
    });
  }

  render() {
    // ここは普通のjsなのでコメント書けます

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
