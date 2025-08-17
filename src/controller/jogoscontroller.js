// ============== JOGOS ==============
import * as Jogos from '../repositorios/jogosrepository.js'

import { Router } from "express";
const endpoints = Router()


endpoints.get('/steam', async (req, resp) => {
    let registro = await Jogos.ListarJogos();
    resp.send(registro);
});

endpoints.post('/steam', async (req, resp) => {
    let NovoJogo = req.body;
    let id = await Jogos.AdicionarJogos(NovoJogo);
    resp.send({ novoid: id });
});


export default endpoints