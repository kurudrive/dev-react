// import React, { Component } from 'react';
// class　コンポーネントだと Component を使ってないのでビルド時に warning が出るので読み込まない
import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "花子", age: 12 },
    { name: "瑛太" },
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
User.defaultProps = {
  age:1
}

export default App;
