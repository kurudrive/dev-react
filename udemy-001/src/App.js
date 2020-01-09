// import React, { Component } from 'react';
// class　コンポーネントだと Component を使ってないのでビルド時に warning が出るので読み込まない
import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "花子", age: 12 },
    { name: 2 },
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return  <User name={profile.name} age={profile.age} key={index} />
        })
      }
   
    </div>
  )
}

// props は コンポーネントの属性
const User = (props) => {
return <div>よう！ 俺は {props.name} だぜ！ {props.age}歳だよ！</div>
}

// Props がない場合のデフォルト値を設定できる
// User.defaultProps = {
//   age:1
// }

// 型チェック
User.propTypes = {
  name: PropTypes.string,
  // .isRequired だと必須になる
  age: PropTypes.number.isRequired
}

export default App;
