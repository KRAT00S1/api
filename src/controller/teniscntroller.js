import * as Tenis from '../repositorios/tenisrepository.js'

import { Router } from "express";
const endpoints = Router();



endpoints.get('/tenis', async (req, resp) => {
    let registro = await Tenis.ListarTenis();
    resp.send(registro);
});

endpoints.post('/tenis', async (req, resp) => {
    let NovoTenis = req.body;
    let id = await Tenis.AdicionarTenis(NovoTenis);
    resp.send({ novoid: id });
});


export default endpoints