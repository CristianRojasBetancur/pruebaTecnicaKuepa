import React from 'react';
import '../css/conexionesHoy.css';

const conexionesHoy = (props) => {
    return (
        <>
            <div className="contenedorConexiones">
                <p>Conexiones de agenda para hoy</p>
                <table className='mt-3'>
                    <div className="tabla">
                        {props.data.map((element, index) => {
                            return (
                                <tr key={element.id} className='fila row'>
                                    <td className='col-4'>{element.name}</td>
                                    <td className='col-4'>Llamar <br /> <span>Descuento temporada</span></td>
                                    <td className='col-2'>{element.plus ? <div className="orangePoint"></div> : <div className="grayPoint"></div>}</td>
                                    <td className='col-2'><i class="fas fa-phone-alt"></i> <i class="fas fa-comment-alt"></i></td>
                                </tr>
                            )
                        })}
                    </div>
                </table>
            </div>
        </>
    );
};

export default conexionesHoy;