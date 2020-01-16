import React, {Fragment} from "react";
import Cita from "./Cita";
import PropTypes from 'prop-types';

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

ListaCitas.propTypes = {
  citas: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired
};

export default ListaCitas;