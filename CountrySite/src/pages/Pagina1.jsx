import { useState } from "react";

function PaginaOne() {
    const [paisEspecifico] = useState(() => {
        const SalvarPais = window.localStorage.getItem('Pais Específico Salvo');
        return SalvarPais ? JSON.parse(SalvarPais) : [];
    });

    return( <div>
        {paisEspecifico.map((dadosDosPaises) => {
            return (
                <div key={dadosDosPaises.latlng}>
                    <h2>{dadosDosPaises.name.common}</h2>
                    <img src={dadosDosPaises.flags.png} alt={dadosDosPaises.name.common} />
                    <p>continents: {dadosDosPaises.continents}</p>
                    <p>Area: {dadosDosPaises.area}km²</p>
                    <p> Capital: {dadosDosPaises.capital}</p>
                </div>
            )
        })}
    </div>
)}

export default PaginaOne