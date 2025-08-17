import * as Musicas from '../repositorios/musicasrepository.js'

import { Router } from "express";
const endpoints = Router()

endpoints.get('/musicas', async (req, resp) => {
    let registro = await Musicas.ListarMusicas();
    resp.send(registro);
});

endpoints.post('/musicas', async (req, resp) => {
    let NovaMusica = req.body;
    let id = await Musicas.AdicionarMusica(NovaMusica);
    resp.send({ novoid: id });
});



export default endpoints
