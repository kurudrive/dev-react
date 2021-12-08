# useState

参考文献
https://qiita.com/seira/items/f063e262b1d57d7e78b4

## useStateの基本形

```
//const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
const [count, setCount] = useState(initialState)

// ちなみにクラスコンポーネントでは、、、
this.state = {
  count: initialState
}
```