 import { useState } from "react";

function PaginaOne() {
    const [paisEspecifico] = useState(() => {
        const SalvarPais = window.localStorage.getItem('Pais Específico Salvo');
        return SalvarPais ? JSON.parse(SalvarPais) : [];
    });

    return( 
        <div className="Paises">
    <section>
        {paisEspecifico.map((dadosDosPaises) => {
            return (
                <div key={dadosDosPaises.latlng}>
                    <h2>{dadosDosPaises.name.common}</h2>
                    <img src={dadosDosPaises.flags.png} alt={dadosDosPaises.name.common} />
                    <p>Area: {dadosDosPaises.area}km²</p>
                </div>
            )
        })}
    </section>
    </div>
)}

export default PaginaOne