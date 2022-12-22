import { AppRouter } from './config/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createBrowserHistory } from 'history';
import './App.css';
import { Header } from './components/Header';
import { fetchAssetList } from './utils';

const history = createBrowserHistory();

function App() {
  const files = fetchAssetList();

  // const runAllTheThings = () => {
  //   document.addEventListener('DOMContentLoaded', function() {
  //     var calendarEl = document.getElementById('calendar');
  //     var calendar = new FullCalendar.Calendar(calendarEl, {
  //       initialView: 'dayGridMonth'
  //     });
  //     calendar.render();
  //   });
  // }

  return (
    <BrowserRouter history={history}>
      <Helmet>
        <script src='fullcalendar/dist/index.global.js'></script>
        <script>
          {/* {runAllTheThings()} */}
        </script>
      </Helmet>
      <div style={{background: 'url("' + files['wood-planks.jpg'].default + '") center center'}}>
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
