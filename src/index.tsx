import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BaseLayout from './components/base-layout/base-layout';

import './index.css';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <App/>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
);

