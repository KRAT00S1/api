// ============== EMPRESA ==============
import * as Empresa from '../repository/empresasrespository.js'

import { Router } from "express";
const endpoints = Router()


endpoints.get('/empresa/filtro', async (req, resp) => {
    let filtro = req.query.nm_nome
    let registro = await Empresa.FiltrarFuncionarios(filtro);
    resp.send(registro);
});

endpoints.get('/empresa/:n1', async (req, resp) => {
    let id = Number(req.params.n1)
    let registro = await Empresa.ProcurarFuncionarios(id);
    resp.send(registro);
});



endpoints.get('/empresa', async (req, resp) => {
    let registro = await Empresa.ListarFuncionarios();
    resp.send(registro);
});

endpoints.post('/empresa', async (req, resp) => {
    let novoFuncionario = req.body;
    let id = await Empresa.AdicionarFuncionario(novoFuncionario);
    resp.send({ novoid: id });
});

endpoints.put('/empresa/:n1', async (req, resp) => {
    let id = req.params.n1
    let novoFuncionario = req.body;
    await Empresa.AlterarFuncionario(id,novoFuncionario);
    resp.send();
});


endpoints.delete('/empresa/:n1', async (req, resp) => {
    let id = Number(req.params.n1)
    await Empresa.Deletarfuncionarios(id);
    resp.send();
});



export default endpoints
