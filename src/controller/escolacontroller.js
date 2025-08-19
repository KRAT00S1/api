// ============== ESCOLA ==============
import * as Escola from '../repository/escolarepository.js'

import { Router } from "express";
const endpoints = Router();


endpoints.get('/escola/filtro', async (req, resp) => {
    let filtro = req.query.nm_materia
    let registro = await Escola.Filtrarmaterias(filtro);
    resp.send(registro);
});

endpoints.get('/escola/:n1', async (req, resp) => {
    let id = req.params.n1
    let registro = await Escola.Procurarmaterias(id);
    resp.send(registro);
});




endpoints.get('/escola', async (req, resp) => {
    let registro = await Escola.listarmaterias();
    resp.send(registro);
});

endpoints.post('/escola', async (req, resp) => {
    let NovaMateria = req.body;
    let id = await Escola.AdicionarMateria(NovaMateria);
    resp.send({ novoid: id });
});

endpoints.put('/escola/:n1', async (req, resp) => {
    let id = req.params.n1
    let NovaMateria = req.body;
    await Escola.AlterarMateria(id,NovaMateria);
    resp.send();
});


endpoints.delete('/escola/:n1', async (req, resp) => {
    let id = req.params.n1
    
    await Escola.DeletarMateria(id);
    resp.send();
});

export default endpoints