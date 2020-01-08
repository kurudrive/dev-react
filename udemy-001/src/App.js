import React, { Component } from 'react';

class App extends Component{
  render() {
    // const greeting = "Hi";
    // const dom = <div><h1 className="foo">{greeting}</h1></div>;
    // return dom;
    // return <input type="text" onClick={() => { console.log('aaa') }} />;
    // return <input type="text" onChange={() => { console.log('aaa') }} />; 
    return (
      // React.Fragment で外側のタグを省略できる
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => { console.log('aaa') }} />
      </React.Fragment>
    )
  }
}

export default App;
