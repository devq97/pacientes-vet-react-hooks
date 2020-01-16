import React, {useState} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";

const App = () => {

  const [citas, guardarCitas] = useState([]);

  const crearNuevaCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  };

  const eliminarCita = id => {
    let nuevasCitas = citas.filter(cita => cita.id !== id );
    guardarCitas(nuevasCitas);
  };

  return (
    <div className="container">
      <Header
        titulo='Administrador de Pacientes'
      />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearNuevaCita={crearNuevaCita}
            />
          </div>

          <div className="one-half column">
            <ListaCitas
              citas={citas}
              eliminarCita={eliminarCita}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
