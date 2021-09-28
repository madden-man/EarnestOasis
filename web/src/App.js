import { AppRouter } from './config/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import { Header } from './components/Header';
import { fetchAssetList } from './utils';

const history = createBrowserHistory();

function App() {
  const files = fetchAssetList();

  return (
    <BrowserRouter history={history}>
      <div style={{background: 'url("' + files['wood-planks.jpg'].default + '") center center'}}>
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
