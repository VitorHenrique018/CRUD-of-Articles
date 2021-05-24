import React, { useState } from "react";
import { getArticles } from "./actions/ApiArticles";
import DataTable from "react-data-table-component";
import Header from "./components/modules/header/Header.js";
import "./global.css";

const App = () => {
  const [checkArticle, setCheckArticle] = useState(false);
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "Id",
      selector: "_id",
      sortable: true,
    },
    {
      name: "Título",
      selector: "titulo",
      sortable: true,
    },
    {
      name: "Conteúdo",
      selector: "conteudo",
      sortable: true,
      right: true,
    },
  ];

  async function getA() {
    try {
      const resp = await getArticles();
      setData(resp);
    } catch (err) {
      console.log("erro");
    }
  }

  const buscarTodosArtigos = () => {
    getA();
    setCheckArticle((prevCheck) => !prevCheck);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1>Listar Artigos</h1>

        {checkArticle === false ? (
          <button className="buttonSearch" onClick={buscarTodosArtigos}>
            Buscar Todos os Artigos
          </button>
        ) : (
          <button className="buttonSearch" onClick={buscarTodosArtigos}>
            Esconder Todos os Artigos
          </button>
        )}
        <ul>
          {checkArticle === false ? (
            <p>Nenhum resultado a ser visualizado</p>
          ) : (
            <DataTable columns={columns} data={data} />
          )}
        </ul>
      </div>
    </>
  );
};

export default App;
