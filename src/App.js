import './App.css';
import Navbar from './components/navbar';
import TopBar from './components/topBar';
import MetaIndividual from './components/metaIndividual';
import MetaGrupal from './components/metaGrupal';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Navbar />
        <div className="content">
          <TopBar />

          {/* Apartado de llamadas y objetivos realizados */}

          <h1 className='mt-4'>Hola, Jorge</h1>
          <div className="row mt-4">
            <div className="completeCalls col-5 me-5">
              <div className="cola">
                <MetaIndividual />
              </div>
            </div>
            <div className="col-3">
              <div className="meta">
                <MetaGrupal />
              </div>
            </div>
          </div>

          {/* Plan para hoy */}

          <div className="row mt-5">
            <div className="col-5">
              Conexiones para hoy
            </div>
            <div className="planHoy col-7">
              <h3>Tu plan de hoy</h3>
              <span>Ir a la gestion de llamados <i class="fas fa-angle-right"></i></span>
            </div>
          </div>

          {/* Barra lateral derecha */}

          <div className="barraLateral">
            
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
