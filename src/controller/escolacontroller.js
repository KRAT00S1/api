// ============== ESCOLA ==============
import * as Escola from '../repositorios/escolarepository.js'

import { Router } from "express";
const endpoints = Router();


endpoints.get('/escola', async (req, resp) => {
    let registro = await Escola.listarmaterias();
    resp.send(registro);
});

endpoints.post('/escola', async (req, resp) => {
    let NovaMateria = req.body;
    let id = await Escola.AdicionarMateria(NovaMateria);
    resp.send({ novoid: id });
});

export default endpoints