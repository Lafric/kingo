import redHeart from "./redHeart.png";
import blackHeart from "./blackHeart.png";
import "./App.css";
import { isChrome, isFirefox, isIOS, isAndroid } from "react-device-detect";

const App = () => {
  const renderTuesamArsh = () => {
    if (isIOS) {
      return <img src={blackHeart} className="App-logo" alt="logo" />;
    }
    if (isAndroid) {
      return <img src={redHeart} className="App-logo" alt="logo" />;
    }
    if (isChrome) {
      return <img src={blackHeart} className="App-logo" alt="logo" />;
    }
    if (isFirefox) {
      return <img src={redHeart} className="App-logo" alt="logo" />;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Look my Heart.</p>
        {renderTuesamArsh()}
      </header>
    </div>
  );
};

export default App;
