import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store/configure-store';
import Form from '../Form';
import Panel from '../Panel';

const store = configureStore();

const App = () => (
  <div>
    <Provider store={store}>
      <div>
        <Form />
        <Panel />
      </div>
    </Provider>
  </div>
);

export default App;
