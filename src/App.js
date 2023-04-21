import './App.css';
import Abonents from './component/Abonents/Abonents';
import Header from './components/header/Headers';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <Abonents/>
        <div className="content">
          <div className="content-container">
            
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
