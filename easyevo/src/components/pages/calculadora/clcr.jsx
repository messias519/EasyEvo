import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../../../app.css"


const ClCr = () => {

    const [idade, setIdade] = useState(30);
    const [peso, setPeso] = useState(70);
    const [cr, setCr] = useState(1);
    const [sexo, setSexo] = useState('Masculino');

    
    const calcularClCr = () => {
        if (!idade || !peso || !cr) return 0;
        const constante = sexo === 'Masculino' ? 1 : 0.85;
        return ((140 - parseInt(idade)) * parseInt(peso) * constante) / (72 * parseFloat(cr));
    };

    const resultadoClCr = calcularClCr();

    return (
        <div>            
            <div className='calculadora-container'>
                <a className='calculadora-container-title'> ClCr - Cockroft & Gault </a>
                <div className="calculadora-input">
                    Idade: <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} /> anos.
                </div>
                <div className="calculadora-input">
                    Peso: <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} /> kg.
                </div>
                <div className="calculadora-input">
                    Cr: <input type="number" step="0.01" value={cr} onChange={(e) => setCr(e.target.value)} /> mg/dL.
                </div>
                <div className="calculadora-input">
                    Sexo: 
                    <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                </div>
                <div className="calculadora-resultado">Resultado: {resultadoClCr.toFixed(2)} mL/min</div>
                
            </div>
            <div className="voltar">
                        <Link to="/calculadora" >
                            <img src="\img\botao-voltar.png" alt="Voltar"/>
                        </Link> 
                    </div>
        </div>
        
    );
  };

  export default ClCr
  
