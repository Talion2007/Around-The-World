import { useState, useEffect } from "react";

function Home() {
    const [todosPaises, setTodosPaises] = useState([]);

    const [nomePaisEspecifico, setNomePaisEspecifico] = useState(() => {
        const salvarNomePais = window.localStorage.getItem('Países');
        return salvarNomePais ? JSON.parse(salvarNomePais) : 'Brazil';
    });


        const SalvarPais = window.localStorage.getItem('Pais Específico Salvo');
        return SalvarPais ? JSON.parse(SalvarPais) : [];


    });

    const [error, setError] = useState(null);

    useEffect(() => {
        async function TodosOsPaises() {
            try {
                const respostaTodos = await fetch("https://restcountries.com/v3.1/independent?status=true&fields=name&quot");

                if (!respostaTodos.ok) {
                    throw new Error("Viadão bem legalzão");
                }

                const dadosTodos = await respostaTodos.json();
                setTodosPaises(dadosTodos);

            } catch (error) {
                setError(error.message);
            }
        }

        TodosOsPaises();
    }, []);

    const todosPaisesOrdenados = todosPaises.sort( (a, b) => a.name.common.localeCompare(b.name.common) );

    console.log(todosPaises);
    console.log("Opa", todosPaisesOrdenados)

useEffect(() => {
    async function PaisEspecificoEncontrar() {
        try {
            const respostaPaisEspecifico = await fetch(`https://restcountries.com/v3.1/name/${nomePaisEspecifico}`)

            localStorage.setItem("Países", JSON.stringify(nomePaisEspecifico));

            

            localStorage.setItem("Pais Específico Salvo", JSON.stringify(paisEspecifico));

            localStorage.setItem("Pais Específico Salvo", JSON.stringify(salvarPais));


            if (!respostaPaisEspecifico.ok) {
                throw new Error("Viadão bem legalzão");
            }

            const dadosEspecificos = await respostaPaisEspecifico.json();
            setPaisEspecifico(dadosEspecificos);

        } catch {
            setError("Pais não encontrado");
        }

    }

    PaisEspecificoEncontrar();

}, [nomePaisEspecifico, paisEspecifico]);


const paisEspecificoOrdenado = paisEspecifico.sort( (a, b) => a.name.common.localeCompare(b.name.common) );
console.log("Pais especifico: ", paisEspecifico)

console.log(error)

return (


        <p>API de países</p>
    <div  className="Paises">
        <p>Kawaii</p>



<section>
        <select
            onChange={(e) => {
                setNomePaisEspecifico(e.target.value);
            }}

        >

            <option>Select One Country</option>

            {todosPaises.map((pais) => {

            value={nomePaisEspecifico}

        > 
        <option value="">{nomePaisEspecifico}</option>
            {todosPaisesOrdenados.map((pais) => {

                return (
                    <option key={pais.latlng} value={pais.name.official}>
                        {pais.name.common}
                    </option>
                );
            })}
        </select>

        <input
        type="text"
        value={nomePaisEspecifico}
        onChange={(e) => {
            setNomePaisEspecifico(e.target.value);
            }}
            placeholder={nomePaisEspecifico}
        ></input>
        </section>

        <div className="PaisEspecifico">
            {paisEspecificoOrdenado.map((dadosDosPaises) => {
                return (
                    <button key={dadosDosPaises.latlng} onClick={(e) => setNomePaisEspecifico(dadosDosPaises.name.official)} className="button">
                        <h2>{dadosDosPaises.name.common}</h2>
                        <img src={dadosDosPaises.flags.png} alt={dadosDosPaises.name.common} />

                        <p>Capital: {dadosDosPaises.capital}</p>
                        <p>População: {dadosDosPaises.population}</p>
                        <p>continents: {dadosDosPaises.continents}</p>
                        <p>Area: {dadosDosPaises.area}km²</p>

       </div>

                    </button>

                )
            })}
        </div>

    </div>
);
}
export default Home;