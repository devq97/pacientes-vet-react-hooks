import React, {Fragment} from "react";
import Cita from "./Cita";

const ListaCitas = ({citas, eliminarCita}) => (
  <Fragment>
    {(citas.length === 0) ? <h2>No hay citas</h2> : <h2>Administra tus citas</h2>}
    {citas.map(cita => (
      <Cita
        key={cita.id}
        cita={cita}
        eliminarCita={eliminarCita}
      />
    ))}
  </Fragment>
);

export default ListaCitas;