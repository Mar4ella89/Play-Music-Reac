import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './components/App.js';

const ReduxExample = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ReduxExample;
