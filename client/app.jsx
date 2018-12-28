import React from 'react';
import ReactDOM from 'react-dom';
 
class App extends React.Component {
  render() {
    return (<div>
      <form>
        <label>
          <input type="text" name="name" />
        </label>
      </form>
    </div>);
  }
}
 
ReactDOM.render(<App />, document.getElementById('app'));
