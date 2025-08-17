// ============== FUTEBOL ==============
import * as Futebol from '../repositorios/futebolrepository.js'

import { Router } from "express";
const endpoints = Router()



endpoints.get('/time', async (req, resp) => {
    let registro = await Futebol.ListarJogadores();
    resp.send(registro);
});

endpoints.post('/time', async (req, resp) => {
    let NovoTime = req.body;
    let id = await Futebol.AdicionarTime(NovoTime);
    resp.send({ novoid: id });
});

export default endpoints