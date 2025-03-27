 import { useState } from "react";

function PaginaOne() {
    const [paisEspecifico] = useState(() => {
        const SalvarPais = window.localStorage.getItem('Pais Específico Salvo');
        return SalvarPais ? JSON.parse(SalvarPais) : [];
    });

    return( 
        <div className="Paises">
        {paisEspecifico.map((dadosDosPaises) => {
            return (
                <div key={dadosDosPaises.latlng}>
                    <h2>{dadosDosPaises.name.common}</h2>
                    <img src={dadosDosPaises.flags.png} alt={dadosDosPaises.name.common} />
                    <p>Nome comum: {dadosDosPaises.name.common}</p>
                    <p>Nome oficial: {dadosDosPaises.name.official}</p>
                    <p>Código da Fifa: {dadosDosPaises.fifa}</p>
                </div>
            )
        })}
    </div>
)}

export default PaginaOne