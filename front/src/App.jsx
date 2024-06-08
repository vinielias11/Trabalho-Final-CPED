import { useState } from 'react';
import './App.css'

function App() {
    const [texto, setTexto] = useState('');
    const [idioma, setIdioma] = useState('de');
    const [textoTraduzido, setTextoTraduzido] = useState('');

    const traduzir = async () => {
        const url = window.ipServer;

        if (!url || url.trim().length === 0) return;

        const objresponse = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idioma, texto })
        })

        const traducao = await objresponse.json();

        setTextoTraduzido(traducao.texto);
    };

    return (
        <>
            <div className="app-container">
                <h1>Tradutor</h1>
                <div>
                    <div className="translator">
                        <textarea placeholder="Insira o texto aqui" className="text-input" value={texto} onChange={e => setTexto(e.target.value)}></textarea>
                        <select className="select-language" value={idioma} onChange={e => setIdioma(e.target.value)}>
                            <option value="de">Alemão</option>
                            <option value="es">Espanhol</option>
                            <option value="fr">Francês</option>
                            <option value="en">Inglês</option>
                            <option value="it">Italiano</option>
                            <option value="ja">Japonês</option>
                            <option value="pt-br">Português</option>
                            <option value="ru">Russo</option>
                        </select>
                        <button onClick={traduzir} className="translate-button">
                            Traduzir
                        </button>
                        <textarea placeholder="Texto traduzido" readOnly className="text-output" value={textoTraduzido}></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
