// ============== EMPRESA ==============
import * as Empresa from '../repositorios/empresasrespository.js'

import { Router } from "express";
const endpoints = Router()

endpoints.get('/empresa', async (req, resp) => {
    let registro = await Empresa.ListarFuncionarios();
    resp.send(registro);
});

endpoints.post('/empresas', async (req, resp) => {
    let novoFuncionario = req.body;
    let id = await Empresa.AdicionarFuncionarios(novoFuncionario);
    resp.send({ novoid: id });
});

export default endpoints
