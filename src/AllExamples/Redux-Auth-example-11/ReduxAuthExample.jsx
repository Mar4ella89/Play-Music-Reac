import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import { App } from './components/App.js';
// import 'modern-normalize';
// import './styles.css';

const ReduxAuthExample = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <BrowserRouter> */}
        <App />
        {/* </BrowserRouter> */}
      </PersistGate>
    </Provider>
  );
};

export default ReduxAuthExample;
