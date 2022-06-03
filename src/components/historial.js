import React from 'react';
import '../css/historial.css';
import logo30 from '../img/30.png';

const historial = () => {
    return (
        <>
            <div className="col-5 me-4">
                <div className='container'>
                    <div className="row">
                        <div className="col-6">
                            <div className="cuadro">
                                <img src={logo30} alt=""></img>
                            </div>
                        </div>
                        <div className="texto col-6">
                            <p className='mb-2'>Leads de primer contacto</p>
                            <span className='mb-2'><i class="fas fa-phone-alt"></i></span><span className='ms-2'>15</span><br />
                            <span><i class="fas fa-comment-alt"></i></span><span className='ms-2'>15</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-5">
                <div className='container'>
                    <div className="row">
                        <div className="col-6">
                            <div className="cuadro2">
                                <img src={logo30} alt=""></img>
                            </div>
                        </div>
                        <div className="texto col-6">
                            <p className='mb-2'>Leads de primer contacto</p>
                            <span className='mb-2'><i class="fas fa-phone-alt"></i></span><span className='ms-2'>15</span><br />
                            <span><i class="fas fa-comment-alt"></i></span><span className='ms-2'>15</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-5 mt-4">
                <div className='container'>
                    <div className="row">
                        <div className="col-6">
                            <div className="cuadro3">
                                <img src={logo30} alt=""></img>
                            </div>
                        </div>
                        <div className="texto col-6">
                            <p className='mb-2'>Leads de primer contacto</p>
                            <span className='mb-2'><i class="fas fa-phone-alt"></i></span><span className='ms-2'>15</span><br />
                            <span><i class="fas fa-comment-alt"></i></span><span className='ms-2'>15</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default historial;