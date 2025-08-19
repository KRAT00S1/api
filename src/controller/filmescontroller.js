// ============== FILMES ==============
import * as Filmes from '../repository/filmesrepository.js'

import { Router } from "express";
const endpoints = Router();




endpoints.get('/filmes/filtro', async (req, resp) => {
    let filtro = req.query.titulo
    let registro = await Filmes.FiltarFilmes(filtro);
    resp.send(registro);
});

endpoints.get('/filmes/:n1', async (req, resp) => {
    let id = req.params.n1
    let registro = await Filmes.ProcurarFilme(id);
    resp.send(registro);
});



endpoints.get('/filmes', async (req, resp) => {
    let registro = await Filmes.ListarFilmes();
    resp.send(registro);
});

endpoints.post('/filmes', async (req, resp) => {
    let NovoFilme = req.body;
    let id = await Filmes.Adicionarfilmes(NovoFilme);
    resp.send({ novoid: id });
});

endpoints.put('/filmes/:n1', async (req, resp) => {
    let id = req.params.n1
    let NovoFilme = req.body;
    await Filmes.AlterarFilme(id,NovoFilme);
    resp.send();
});

endpoints.delete('/filmes/:n1', async (req, resp) => {
    let id = req.params.n1
    await Filmes.DeletarFilme(id)
    resp.send()
});



export default endpoints

