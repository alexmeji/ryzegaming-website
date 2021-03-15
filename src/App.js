import logo from './ryze_logo.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import twitter from './twitter.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sitio bajo construcción <code>#WeRyze</code>
        </p>
        <ul className="social-networks">
          <li><a href="https://twitter.com/RyzeGaming_GT"><img src={twitter} alt="Twitter" title="Twitter" /></a></li>
          <li><a href="https://www.instagram.com/ryzegaming.gt"><img src={instagram} alt="Instagram" title="Instagram" /></a></li>
          <li><a href="https://www.facebook.com/RyzeGaming.com.gt"><img src={facebook} alt="Facebook" title="Facebook" /></a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
