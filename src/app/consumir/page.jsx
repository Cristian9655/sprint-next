'use client'
import { useEffect, useState } from "react"
import {FaEdit, FaTrash, FaPen } from 'react-icons/fa'
import Link from "next/link";
export default function Consumir(){
    const[clientes, setClientes] = useState([])
    const[bicicletas, setBicicletas] = useState([])
    const[vistorias, setVistorias] = useState([])
    const[sinistros, setSinistros] = useState([])

    const [error, setError] = useState(null);

    const handDelete = (id, endpoint) => {
        fetch(`http://localhost:8080/demo/webapi/${endpoint}/${id}`, {
          method: "delete",
        })
          .then((resp) => {
            if (resp.ok) {
              setError(null);
              window.location = "/consumir";
            } else {
              setError("Esta linha de dodos esta sendo usada pela lista Vistoria ou Sinistro.");
              alert("Esta linha de dodos esta sendo usada pela lista Vistoria ou Sinistro.");
            }
          })
          .catch((error) => {
            console.error(error);
            setError("Esta linha de dodos esta sendo usada pela lista Vistoria ou Sinistro.");
            alert("Esta linha de dodos esta sendo usada pela lista Vistoria ou Sinistro.");
          });
      };

    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/clientes')
            .then(resp => resp.json())
            .then(resp => setClientes(resp))
            .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/bicicletas')
            .then(resp => resp.json())
            .then(resp => setBicicletas(resp))
            .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/vistorias')
            .then(resp => resp.json())
            .then(resp => setVistorias(resp))
            .catch(error => console.error(error))
    }, [])
    
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/sinistros')
            .then(resp => resp.json())
            .then(resp => setSinistros(resp))
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
                        <th className="Criar"><Link href="/consumir/criarCliente/0">Cadastrar Cliente</Link></th>
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
                                <Link href={`/consumir/criarCliente/${clie.id}`}>Editar
                                    <FaPen className="FaPen"></FaPen >
                                </Link>
                                <button button onClick={handDelete.bind(this,clie.id, 'clientes')}>Excluir<FaTrash className="iconEx"></FaTrash></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1 className="consumir__titulo">Lista de Bicicletas Cadastrados</h1>

            <table className="consumir__table">
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Numero de Serie</th>
                        <th>Ano de fabricação</th>
                        <th>Valo no mercado</th>
                        <th className="Criar"><Link href="/consumir/criarBicicleta/0">Inserir Bicicleta</Link></th>
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
                                <Link href={`/consumir/criarBicicleta/${bic.id}`}>Editar
                                    <FaPen className="FaPen"></FaPen >
                                </Link>
                                <button button onClick={handDelete.bind(this,bic.id, 'bicicletas')}>Excluir<FaTrash className="iconEx"></FaTrash></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1 className="consumir__titulo">Lista de Vistorias</h1>

            <table className="consumir__table">
                <thead>
                    <tr>
                        <th>fotos_videos</th>
                        <th>ID da Bike</th>
                        <th>ID do Cliente</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {vistorias.map(vis=>(
                        <tr key={vis.id} className="tr">
                            <td className="td">{vis.fotos_videos}</td>
                            <td className="td">{vis.id_bike}</td>
                            <td className="td">{vis.id_cliente}</td>
                            <td className="excluir">
                                <button button onClick={handDelete.bind(this,vis.id, 'vistorias')}>Excluir<FaTrash className="iconEx"></FaTrash></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1 className="consumir__titulo">Lista de Sinistros</h1>

            <table className="consumir__table">
                <thead>
                    <tr>
                        <th>Data do Sinistro</th>
                        <th>Descrição</th>
                        <th>ID da Bicicleta</th>
                        <th>ID do Cliente</th>
                        <th>Valor do Prejuizo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {sinistros.map(sin=>(
                        <tr key={sin.id} className="tr">
                            <td className="td">{sin.data_sinistro}</td>
                            <td className="td">{sin.descricao}</td>
                            <td className="td">{sin.id_bike}</td>
                            <td className="td">{sin.id_cliente}</td>
                            <td className="td">{sin.valor_prejuizo}</td>
                            <td className="excluir">
                                <button button onClick={handDelete.bind(this,sin.id, 'sinistros')}>Excluir<FaTrash className="iconEx"></FaTrash></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}