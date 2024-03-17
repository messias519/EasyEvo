import { Link } from 'react-router-dom';
import "../../../app.css";
import Header from '../../header/header';

const Calculadora = () => {
   
    return (
            <div>
                <div>
                    <Link to="/">
                        <Header />
                    </Link>
                </div>
                <div className='calculadora'>
                    <div>
                        <Link to="/calculadora/clcr" > 
                            <img src="/src/components/img/botao-clcr.png" alt="Clcr"/>
                        </Link>
                        <Link to="/calculadora/dva" > 
                            <img src="/src/components/img/botao-dva.png" alt="Clcr"/>
                        </Link>
                        <div className="voltar">
                            <Link to="/" >
                                <img src="/src/components/img/botao-voltar.png" alt="Voltar"/>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Calculadora;
