'use client'
import { useEffect, useState } from "react"
import {FaEdit, FaTrash} from 'react-icons/fa'
export default function Consumir(){
    const[clientes, setClientes] = useState([])
    const[bicicletas, setBicicletas] = useState([])

    const handDelete = (id, endpoint)=>{
        fetch(`http://127.0.0.1:5000/api/${endpoint}/${id}`, {method: 'delete'})
            .then(window.location = '/consumir')
            .catch(error => console.error(error))
    }

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/clientes')
            .then(resp => resp.json())
            .then(resp => setClientes(resp))
            .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/bicicletas')
            .then(resp => resp.json())
            .then(resp => setBicicletas(resp))
            .catch(error => console.error(error))
    }, [])
    
    return(
        <main className="consumir">
            <h1 className="consumir__titulo">Lista de Clientes Cadastrados</h1>

            <table className="consumir__table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Cpf</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(clie=>(
                        <tr key={clie.id} className="tr">
                            <td className="td">{clie.nome}</td>
                            <td className="td">{clie.telefone}</td>
                            <td className="td">{clie.email}</td>
                            <td className="td">{clie.cpf}</td>
                            <td className="excluir">
                                <button button onClick={handDelete.bind(this,clie.id, 'clientes')}>Excluir<FaTrash className="iconEx"></FaTrash></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1 className="consumir__titulo">Lista de Clientes Cadastrados</h1>

            <table className="consumir__table">
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Numero de Serie</th>
                        <th>Ano de fabricação</th>
                        <th>Valo no mercado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {bicicletas.map(bic=>(
                        <tr key={bic.id} className="tr">
                            <td className="td">{bic.marca}</td>
                            <td className="td">{bic.modelo}</td>
                            <td className="td">{bic.num_serie}</td>
                            <td className="td">{bic.ano_fabricacao}</td>
                            <td className="td">{bic.valor_mercado}</td>
                            <td className="excluir">
                                <button button onClick={handDelete.bind(this,bic.id, 'bicicletas')}>Excluir<FaTrash className="iconEx"></FaTrash></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}