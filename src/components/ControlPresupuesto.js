import React, { Fragment } from 'react';
import {revisarPresupuesto} from '../helpers';
import PropTypes from 'prop-types';


const ControlPresupuesto = ({presupuesto, saldo}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto,saldo)}>
                Saldo: ${saldo}
            </div>
        </Fragment>

    );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    saldo: PropTypes.number.isRequired
}

export default ControlPresupuesto;