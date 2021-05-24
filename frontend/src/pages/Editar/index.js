import React, { useState } from "react";
import { editArticles } from "../../actions/ApiArticles";

import Header from "../../components/modules/header/Header";

const EditarArtigo = () => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [id, setId] = useState("");

  async function putA() {
    const obj = {
      titulo: titulo,
      conteudo: conteudo,
    };
    try {
      const resp = await editArticles(obj, id);
      alert(resp.message);
    } catch (err) {
      console.log("erro");
    }
    setId('')
    setTitulo('')
    setConteudo('')
  }

  const editarArtigo = () => {
    putA();
  };

  return (
    <>
      <Header />
      <h1>Editar Artigo</h1>
      <div className="box">
        <div>
        <input
            placeholder="Id do Artigo"
            className="input-msg"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            placeholder="Titulo"
            className="input-msg"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input
            placeholder="Conteúdo"
            className="input-msg"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          />
          <button onClick={editarArtigo}>Editar Artigo</button>
        </div>
      </div>
    </>
  );
};

export default EditarArtigo;
