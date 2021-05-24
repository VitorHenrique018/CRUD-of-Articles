import React, { useState } from "react";
import { createArticles } from "../../actions/ApiArticles";
import Header from "../../components/modules/header/Header";
import './styles.css'

const CriarArtigo = () => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  async function postA() {
    const obj = {
      titulo: titulo,
      conteudo: conteudo,
    };
    try {
      const resp = await createArticles(obj);
      alert(resp.message);
    } catch (err) {
      console.log("erro");
    }
    setTitulo('')
    setConteudo('')
  }

  const criarArtigo = () => {
    postA();
  };

  return (
    <>
      <Header />
      <h1>Criar Artigo</h1>
      <div className="box">
        
        <div>
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
          <button onClick={criarArtigo}>Criar Artigo</button>
        </div>
      </div>
    </>
  );
};

export default CriarArtigo;
