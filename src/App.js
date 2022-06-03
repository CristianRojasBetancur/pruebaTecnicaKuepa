import { React, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import TopBar from './components/topBar';
import MetaIndividual from './components/metaIndividual';
import MetaGrupal from './components/metaGrupal';
import ConexionesHoy from './components/conexionesHoy';
import Historial from './components/historial';
import Mensaje from './components/mensaje';

function App() {

  // Estilos en línea

  const spinerStyle = {
    'text-align': 'center'
  }

  // Petición API

  const url = 'https://api.opendota.com/api/proPlayers';
  const [data, setData] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setData(responseJSON);
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="App">
      <div className='main'>
        <Navbar data={data} />
        <div className="content">
          <TopBar />

          {/* Apartado de llamadas y objetivos realizados */}

          <h1 className='mt-4'>Hola, Jorge</h1>
          <div className="row mt-4">
            <div className="completeCalls col-6 me-5">
              <MetaIndividual />
            </div>
            <div className="completeGroup col-3">
              <MetaGrupal />
            </div>
          </div>

          {/* Plan para hoy */}

          <div className="agenda row mt-5">
            <div className="conexionesHoy col-5">
              {!data ? <div style={spinerStyle} class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div> : <ConexionesHoy data={data} />}
            </div>
            <div className="col-1"></div>
            <div className="planHoy col-6">
              <div className="text">
                <h3>Tu plan de hoy</h3>
                <span>Ir a la gestion de llamados <i class="fas fa-angle-right"></i></span>
              </div>
              <div className="row mt-4">
                <Historial />
              </div>
            </div>
          </div>
        </div>

        {/* Barra lateral derecha */}

        <div className="barraLateral">
          <div className="barraInterna"></div>
          <Mensaje data={data} />
        </div>

      </div>
    </div>

  );
}

export default App;
