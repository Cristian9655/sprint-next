'use client'
import { useEffect, useState } from "react"
import Link from "next/link";

export default function criarBicicleta({params}){
    const prodId = params.id == 0 ? '' : params.id

    const [novo, setNovo] = useState({
        marca: "",
        modelo: "",
        num_serie: "",
        ano_fabricacao: "",
        valor_mercado: ""
    })

    let metodo = 'post'

    if (prodId) metodo = 'put'

    const handleChange = e=>{
        setNovo({...novo, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = e=>{
        e.preventDefault()
        fetch(`http://localhost:8080/demo/webapi/bicicletas/${prodId}`,{
            method: metodo,
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(novo)
        })
        .then(window.location = "/consumir")
        .catch(error=>console(error))
    }

    useEffect(()=>{
        if(prodId){
            fetch(`http://localhost:8080/demo/webapi/bicicletas/${prodId}`)
            .then(resp => resp.json())
            .then(resp => setNovo(resp))
            .catch(error => console.error(error))
        }
    },[prodId])

    return(
        <main className="criarCliente">
            <form onSubmit={handleSubmit}>
                <h1>Insira uma nova Bicicleta</h1>

                <input type="text" required  name="marca" value={novo.marca} placeholder="Marca" onChange={handleChange}/><br/>

                <input type="text" required name="modelo" value={novo.modelo} placeholder="Modelo" onChange={handleChange}/><br/>

                <input type="text" required name="num_serie" value={novo.num_serie} placeholder="Numero de Serie" onChange={handleChange}/><br/>

                <input type="number" required name="ano_fabricacao" value={novo.ano_fabricacao} placeholder="Ano de Fabricação" onChange={handleChange}/><br/>

                <input type="number" required name="valor_mercado" value={novo.valor_mercado} placeholder="Valor no Mercado" onChange={handleChange}/><br/>

                <button type="submit">Enviar</button>
                <Link href="/consumir">Cancelar</Link>
            </form>
        </main>
    )
}