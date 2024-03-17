import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../header/header';
import '../../../app.css';
const Editor = () => {
    const [texto, setTexto] = useState('');
    const [macro1, setMacro1] = useState('');
    const [macro2, setMacro2] = useState('');
    const [macro3, setMacro3] = useState('');
    const [fonte, setFonte] = useState('');
    const [tamanhoFonte, setTamanhoFonte] = useState('14');

    useEffect(() => {
        const textoSalvo = localStorage.getItem('textoEditor');
        if (textoSalvo) {
            setTexto(textoSalvo);
        }
    }, []);

    const salvarTexto = () => {
        localStorage.setItem('textoEditor', texto);
    };

    const tornarMaiusculo = () => {
        setTexto(texto.toUpperCase());
    };

    const limpar = () => {
        setTexto("");
        localStorage.setItem('textoEditor', "");
    };

    const copiarParaAreaDeTransferencia = () => {
        navigator.clipboard.writeText(texto).then(() => {
            
        });
    };

    const copiarMacro = (macroTexto) => {
        navigator.clipboard.writeText(macroTexto).then(() => {
            
        });
    };

    return (
        <div>
            <Link to="/"><Header /></Link>
            <div className='editor-container'>
                <a className='editor-title'> Editor de texto </a>
                <div className="editor-controls">
                        <label>
                            Fonte:
                            <select value={fonte} onChange={(e) => setFonte(e.target.value)}>
                                <option value="Arial">Arial</option>
                                <option value="Calibri">Calibri</option>
                                <option value="Times New Roman">Times New Roman</option>
                            </select>
                        </label>
                        <label>
                            Tamanho:
                            <input type="number" value={tamanhoFonte} onChange={(e) => setTamanhoFonte(e.target.value)} />
                        </label>                    
                        <br />
                        <button onClick={limpar}>LIMPAR</button>
                        <button onClick={tornarMaiusculo}>MAIÚSCULO</button>
                        <button onClick={copiarParaAreaDeTransferencia}>COPIAR</button>
                        
                </div>
                <div>
                    <textarea
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                            onBlur={salvarTexto}
                            style={{ fontFamily: fonte, fontSize: `${tamanhoFonte}px`, textAlign: 'justify' }}
                            rows="10"
                            cols="150">
                    </textarea>
                </div>
                </div>
                
                    <div className="editor-macros">
                    <div className='editor-title'>Macros</div>
                        {[macro1, macro2, macro3].map((macro, index) => (
                            <div key={index}>
                                <textarea
                                    value={macro}
                                    onChange={(e) => {
                                    if (index === 0) setMacro1(e.target.value);
                                    if (index === 1) setMacro2(e.target.value);
                                    if (index === 2) setMacro3(e.target.value);
                                    }}
                                    rows="2"
                                    cols="50">
                                </textarea>
                                <button onClick={() => copiarMacro(macro)}>Colar</button>
                            </div>
                        ))}
                    </div>
                    
                    
                <div className="voltar">
                    <Link to="/" >
                        <img src="\img\botao-voltar.png" alt="Voltar"/>
                    </Link> 
                </div>
                </div>
                
    );
};

export default Editor;