import React from 'react';
import RepositoryList  from './components/RepositoryList';

import { Provider } from 'react-redux'

import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RepositoryList />
      </Provider>
    </div>
  );
}

export default App;
