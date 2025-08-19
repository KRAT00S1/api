// ============== FUTEBOL ==============
import * as Futebol from '../repository/futebolrepository.js'

import { Router } from "express";
const endpoints = Router()

endpoints.get('/time/filtro', async (req, resp) => {
    let filtro = req.query.nome
    let registro = await Futebol.FiltrarTime(filtro);
    resp.send(registro);
});

endpoints.get('/time/:n1', async (req, resp) => {
    let id = req.params.n1
    let registro = await Futebol.ProcurarTime(id);
    resp.send(registro);
});


endpoints.get('/time', async (req, resp) => {
    let registro = await Futebol.ListarTimes();
    resp.send(registro);
});

endpoints.post('/time', async (req, resp) => {
    let NovoTime = req.body;
    let id = await Futebol.AdicionarTime(NovoTime);
    resp.send({ novoid: id });
});

endpoints.put('/time/:n1', async (req, resp) => {
    let id = req.params.n1
    let novoTime = req.body
    await Futebol.AlterarTime(id,novoTime)
    resp.send()
})

endpoints.delete('/time/:n1', async (req, resp) => {
    let id = req.params.n1
    await Futebol.DeletarTime(id)
    resp.send()
})




export default endpoints