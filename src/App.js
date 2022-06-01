import './App.css';
import Navbar from './components/navbar';
import TopBar from './components/topBar';
import ColaLlamadas from './components/colaLlamadas';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Navbar />
        <div className="content">
          <TopBar />

          <h1 className='mt-4'>Hola, Jorge</h1>
          <div className="row mt-4">
            <div className="col-6 ">
              <div className="cola">
                <ColaLlamadas />
              </div>
            </div>
            <div className="col-6">
              <div className="meta">

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
