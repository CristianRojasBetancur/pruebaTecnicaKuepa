import './App.css';
import Navbar from './components/navbar';
import TopBar from './components/topBar';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Navbar />
        <div className="content">
          <TopBar />
          
        </div>
      </div>

    </div>
  );
}

export default App;
