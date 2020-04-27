import React from 'react';
import FormValidate from './components/form_validate';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__block">
          <FormValidate />
        </div>
      </div>
    );
  }
}

export default App;
