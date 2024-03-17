import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../app.css";

const Dva = () => {
    const [pesoNorepi, setPesoNorepi] = useState(70);
    const [velocidadeNorepi, setVelocidadeNorepi] = useState(10);
    
    const [pesoDobu, setPesoDobu] = useState(70);
    const [velocidadeDobu, setVelocidadeDobu] = useState(10);

    const calcularNorepinefrina = () => {
        return (((velocidadeNorepi * 64) / 60) / pesoNorepi).toFixed(2);
    };

    const calcularDobutamina = (ampolas) => {
        return (((((velocidadeDobu * ampolas) / 60) / pesoDobu) * 1000)).toFixed(2);
    };

    return (
        <div className='calculadora'>
            <a className='calculadora-container-title'>Calculadora para dose de DVA</a>
            <div className='calculadora-container'>
                <a className='calculadora-container-title'>Norepinefrina</a>
                <div className='calculadora-container-text'>
                    Peso: <input type="number" value={pesoNorepi} onChange={(e) => setPesoNorepi(e.target.value)} min="40" max="150" /> kg
                    <br/>
                    Velocidade na Bomba: <input type="number" value={velocidadeNorepi} onChange={(e) => setVelocidadeNorepi(e.target.value)} min="1" max="200" /> mL/h
                    <br/>
                    Resultado em mcg/kg/min: {calcularNorepinefrina()} mcg/kg/min
                </div>
            </div>
            <div className='calculadora-container'>
                <a className='calculadora-container-title'>Dobutamina</a>
                <div className='calculadora-container-text'>
                    Peso: <input type="number" value={pesoDobu} onChange={(e) => setPesoDobu(e.target.value)} min="40" max="150" /> kg
                    <br/>
                    Velocidade na Bomba: <input type="number" value={velocidadeDobu} onChange={(e) => setVelocidadeDobu(e.target.value)} min="1" max="200" /> mL/h
                    <br/>
                    Diluição 1 ampola - Resultado em mcg/kg/min: {calcularDobutamina(1)} mcg/kg/min
                    <br/>
                    Diluição 4 ampolas - Resultado em mcg/kg/min: {calcularDobutamina(4)} mcg/kg/min
                </div>
            </div>
            <div className="voltar">
                <Link to="/calculadora" >
                   <img src="\img\botao-voltar.png" alt="Voltar"/>
                </Link> 
            </div>
        </div>
    );
};

export default Dva;
