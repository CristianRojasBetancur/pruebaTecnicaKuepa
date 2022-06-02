import React from 'react';
import '../css/metaGrupal.css';

const metaGrupal = () => {
    return (
        <>
            <div className="container">
                <h5>Meta grupal</h5>
                <div className="row">
                    <div className="leadsHorizontal">
                        <span>Leads obtenidos</span>
                        <span>200/400</span>
                    </div>
                    <div className="matriculasHorizontal">
                        <span>Matriculas realizadas</span>
                        <span>50/100</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default metaGrupal;