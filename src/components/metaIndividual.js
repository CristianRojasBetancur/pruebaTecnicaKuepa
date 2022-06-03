import React from 'react';
import '../css/metaIndividual.css';

const metaIndividual = () => {
    return (
        <div className='containerMeta'>
            <div className="row">
                <div className="circleContainer col-3">
                    <div className="circle">
                        <div className="circleInt">
                            <h2>50%</h2>
                        </div>
                    </div>
                </div>
                <div className="leads col-5">
                    <div className="col">
                        <div className="row">
                            <div className="col"><span>Leads obtenidos</span></div>
                            <div className="col"><h6>50/100</h6></div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col"><span>Matriculas finalizadas</span></div>
                            <div className="col"><h6>10/20</h6></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default metaIndividual;