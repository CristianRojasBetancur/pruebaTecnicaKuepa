import React from 'react';
import '../css/metaIndividual.css';

const metaIndividual = () => {
    return (
        <div className='containerMeta'>
            <div className="row">
                <div className="circleContainer col-3">
                    <div className="progresoContainer">
                        <div className="circulo">
                            <div className="circuloInterno"></div>
                        </div>
                        <div className="progreso">
                            <div className="circuloInterno">
                                <div className="numero"><p>50%</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leads col-9">
                    <div className="row">
                        <div className="col-6">
                            <div className="lead row">
                                <div className="col-6">
                                    <p>Leads obtenidos</p>
                                </div>
                                <div className="col-6">
                                    <h6>50/100</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="lead row">
                                <div className="col-6">
                                    <p>Cola de llamados</p>
                                </div>
                                <div className="col-6">
                                    <h6>50/100</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 mt-3">
                            <div className="lead row">
                                <div className="col-6">
                                    <p>Matriculas finalizadas</p>
                                </div>
                                <div className="col-6">
                                    <h6>10/20</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default metaIndividual;