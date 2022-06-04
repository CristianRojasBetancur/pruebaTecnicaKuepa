import React from 'react';
import '../css/metaGrupal.css';

const metaGrupal = () => {
    return (
        <>
            <div className="containerMetaGrupal">
                <h5 className='mb-1'>Meta grupal</h5>
                <div className="row">
                    <div className="leadsHorizontal">
                        <span>Leads obtenidos</span>
                        <span>200/400</span>
                    </div>
                    <div className="barra mt-1 mb-3 "></div>
                </div>
                <div className="row">
                    <div className="matriculasHorizontal">
                        <span>Matriculas realizadas</span>
                        <span>50/100</span>
                    </div>
                    <div className="barra mt-1"></div>
                </div>

            </div>
        </>
    );
};

export default metaGrupal;