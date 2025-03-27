import { useState } from "react";

function PaginaThree() {
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
                    <img src={dadosDosPaises.coatOfArms.png} alt={dadosDosPaises.name.common} />
                    <p>Status: {dadosDosPaises.status}</p>
                    <p>Area: {dadosDosPaises.area} Km²</p>
                    <p>População: {dadosDosPaises.population} Habitantes</p>
                </div>
            )
        })}
    </div>
)}

export default PaginaThree;