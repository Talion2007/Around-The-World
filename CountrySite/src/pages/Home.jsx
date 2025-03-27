import { useState, useEffect } from "react";

function Home() {
    const [todosPaises, setTodosPaises] = useState([]);

    const [nomePaisEspecifico, setNomePaisEspecifico] = useState(() => {
        const salvarNomePais = window.localStorage.getItem('Países');
        return salvarNomePais ? JSON.parse(salvarNomePais) : 'Brazil';
    });

    const [paisEspecifico, setPaisEspecifico] = useState(() => {
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

    console.log(todosPaises);

useEffect(() => {
    async function PaisEspecificoEncontrar() {
        try {
            const respostaPaisEspecifico = await fetch(`https://restcountries.com/v3.1/name/${nomePaisEspecifico}?fullText=true`)

            localStorage.setItem("Países", JSON.stringify(nomePaisEspecifico));
            
            localStorage.setItem("Pais Específico Salvo", JSON.stringify(paisEspecifico));

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

console.log("Pais especifico: ", paisEspecifico)

console.log(error)

return (
    <>
        <p>API de países</p>

        <select
            onChange={(e) => {
                setNomePaisEspecifico(e.target.value);
            }}
        >
            <option>Select One Country</option>
            {todosPaises.map((pais) => {
                return (
                    <option key={pais.latlng} value={pais.name.official}>
                        {pais.name.common}
                    </option>
                );
            })}
        </select>

        <div>
            {paisEspecifico.map((dadosDosPaises) => {
                return (
                    <div key={dadosDosPaises.latlng}>
                        <h2>{dadosDosPaises.name.common}</h2>
                        <img src={dadosDosPaises.flags.png} alt={dadosDosPaises.name.common} />

                    </div>
                )
            })}
        </div>

    </>
);
}
export default Home;