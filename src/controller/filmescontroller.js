import * as Filmes from '../repositorios/filmesrepository.js'

import { Router } from "express";
const endpoints = Router();


// Banco de dados: Filmes
endpoints.get('/filmes', async (req, resp) => {
    let registro = await Filmes.ListarFilmes();
    resp.send(registro);
});

endpoints.post('/filmes', async (req, resp) => {
    let NovoFilme = req.body;
    let id = await Filmes.Adicionarfilmes(NovoFilme);
    resp.send({ novoid: id });
});

export default endpoints

