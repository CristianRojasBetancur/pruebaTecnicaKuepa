import React from 'react';
import '../css/mensaje.css';
import whatsAppIcono from '../img/whatsappIcono.png'

const mensaje = (props) => {
    return (
        <>
            <div className='containerMensaje'>

                

                <div className="mensaje">
                    <div className="titulo">
                        <img src={whatsAppIcono} alt="" />
                        <span>Whatsapp</span>
                    </div>
                    <p>Jorge García</p>
                    <span>6min ago</span>
                </div>
                <div className="mensaje">
                    <div className="titulo">
                        <img src={whatsAppIcono} alt="" />
                        <span>Whatsapp</span>
                    </div>
                    <p>Juan García</p>
                    <span>6min ago</span>
                </div>
                <div className="mensaje">
                    <div className="titulo">
                        <img src={whatsAppIcono} alt="" />
                        <span>Whatsapp</span>
                    </div>
                    <p>Juan García</p>
                    <span>6min ago</span>
                </div>
                <div className="mensaje">
                    <div className="titulo">
                        <img src={whatsAppIcono} alt="" />
                        <span>Whatsapp</span>
                    </div>
                    <p>David García</p>
                    <span>6min ago</span>
                </div>
                <div className="mensaje">
                    <div className="titulo">
                        <img src={whatsAppIcono} alt="" />
                        <span>Whatsapp</span>
                    </div>
                    <p>David García</p>
                    <span>6min ago</span>
                </div>
                <div className="mensaje">
                    <div className="titulo">
                        <img src={whatsAppIcono} alt="" />
                        <span>Whatsapp</span>
                    </div>
                    <p>Daniel Amado</p>
                    <span>6min ago</span>
                </div>
                <div className="mensaje">
                    <div className="titulo">
                        <img src={whatsAppIcono} alt="" />
                        <span>Whatsapp</span>
                    </div>
                    <p>Daniel Amado</p>
                    <span>6min ago</span>
                </div>
            </div>
        </>
    );
};

export default mensaje;