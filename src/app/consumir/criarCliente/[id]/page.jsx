'use client'
import { useEffect, useState } from "react"
import Link from "next/link";

export default function criarCliente({params}){
    const prodId = params.id == 0 ? '' : params.id

    const [novo, setNovo] = useState({
        nome: "",
        telefone: "",
        email: "",
        cpf: ""
    })

    let metodo = 'post'

    if (prodId) metodo = 'put'

    const handleChange = e=>{
        setNovo({...novo, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = e=>{
        e.preventDefault()
        fetch(`http://localhost:8080/demo/webapi/clientes/${prodId}`,{
            method: metodo,
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(novo)
        })
        .then(window.location = "/consumir")
        .catch(error=>console(error))
    }

    useEffect(()=>{
        if(prodId){
            fetch(`http://localhost:8080/demo/webapi/clientes/${prodId}`)
            .then(resp => resp.json())
            .then(resp => setNovo(resp))
            .catch(error => console.error(error))
        }
    },[prodId])

    return(
        <main className="criarCliente">
            <form onSubmit={handleSubmit}>
                <h1>Insira o Cliente</h1>

                <input type="text" required  name="nome" value={novo.nome} placeholder="Nome" onChange={handleChange}/><br/>

                <input type="number" required name="telefone" value={novo.telefone} placeholder="Telefone" onChange={handleChange}/><br/>

                <input type="text" required name="email" value={novo.email} placeholder="Email" onChange={handleChange}/><br/>

                <input type="number" required name="cpf" value={novo.cpf} placeholder="Cpf" onChange={handleChange}/><br/>

                <button type="submit">Enviar</button>
                <Link href="/consumir">Cancelar</Link>
            </form>
        </main>
    )
}