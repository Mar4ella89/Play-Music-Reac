import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './components/App.js';

const ReduxAuthExample = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ReduxAuthExample;
