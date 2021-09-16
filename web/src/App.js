import { AppRouter } from './config/AppRouter';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import './App.css';
import { Header } from './components/Header';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <Header />
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
