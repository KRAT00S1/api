// ============== HOSPITAL ==============
import * as Hospital from '../repositorios/hospitalrepository.js'

import { Router } from "express";
const endpoints = Router();

endpoints.get('/hospital', async (req, resp) => {
    let registro = await Hospital.ListarHospital();
    resp.send(registro);
});

endpoints.post('/hospital', async (req, resp) => {
    let NovoPaciente = req.body;
    let id = await Hospital.AdicionarPaciente(NovoPaciente);
    resp.send({ novoid: id });
});


export default endpoints