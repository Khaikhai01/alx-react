import holberton from './holberton.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <footer>Copyright {getFullYear()} - {getFooterCopy(true)}</footer>
      </div>
    </div>
  );
}

export default App;
