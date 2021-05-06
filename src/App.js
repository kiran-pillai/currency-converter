import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App header">
        <div className="App-box">
        CURRENCY CONVERTER
        <div className="App header-box--inputBox">
        <input></input>
        </div>
        <div className="App header-box--dropdown">
        <select name="currency" id="currency-select">
        <option name="USD">USD</option>
        <option name="EUR">EUR</option>
        <option name="ZEN">ZEN</option>
        <option name="PES">PES</option>
        </select>
        </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
