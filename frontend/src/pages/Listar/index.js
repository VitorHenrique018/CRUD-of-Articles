import React, { useState } from "react";
import { getUniqueArticle } from "../../actions/ApiArticles";

import Header from "../../components/modules/header/Header";

const ListarArtigo = () => {
  const [id, setId] = useState("");
  const [uniqueArtigo, setUniqueArtigo] = useState([]);

  async function getID() {
    try {
      const resp = await getUniqueArticle(id);
      setUniqueArtigo(resp);
    } catch (err) {
      console.log("erro");
    }
    setId("");
  }

  const buscarArtigoId = () => {
    getID();
  };

  return (
    <>
      <Header />
      <h1>Listar Artigo</h1>
      <div className="box">
        <div>
          <input
            placeholder="Titulo"
            className="input-msg"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button onClick={buscarArtigoId}>Buscar artigo Individual</button>
        </div>
      </div>
      <div className="box">
        {uniqueArtigo === [] ? (
          <p>Nenhum resultado a ser visualizado</p>
        ) : (
          <table>
            <thead>
              <th>Titulo</th>
              <th>Conteudo</th>
            </thead>
            <tbody>
              <td>{uniqueArtigo.titulo}</td>
              <td>{uniqueArtigo.conteudo}</td>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ListarArtigo;
