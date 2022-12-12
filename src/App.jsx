import logo from "./logo.svg";
import "./App.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isChrome,
  isFirefox,
  isIOS,
} from "react-device-detect";

const App = () => {
  const renderTuesamArsh = () => {
    if (isIOS) {
      return <p>on est Ios.</p>;
    }
    if (isChrome) {
      return <p>on est Chrome.</p>;
    }
    if (isFirefox) {
      return <p>on est Firefox.</p>;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BrowserView>
          <h1>This is rendered only in browser</h1>
        </BrowserView>
        <MobileView>
          <h1>This is rendered only on mobile</h1>
        </MobileView>
        {renderTuesamArsh()}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
