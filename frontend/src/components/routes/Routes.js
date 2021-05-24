import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import App from '../../App'
import CriarArtigo from '../../pages/Criar'
import EditarArtigo from '../..//pages/Editar'
import ListarArtigo from '../../pages/Listar'
import ExcluirArtigo from '../../pages/Excluir'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route exact path="/criar" component={CriarArtigo} />
        <Route exact path="/editar" component={EditarArtigo} />
        <Route exact path="/listar" component={ListarArtigo} />
        <Route exact path="/excluir" component={ExcluirArtigo} />
    </BrowserRouter>
);

export default Routes