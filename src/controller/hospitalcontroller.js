// ============== HOSPITAL ==============
import * as Hospital from '../repositorios/hospitalrepository.js'

import { Router } from "express";
const endpoints = Router();


endpoints.get('/hospital/filtra', async (req, resp) => {

         let filtro = req.query.nm_nome;   
        let pacientes = await Hospital.FiltrarPaciente(filtro);
        resp.send(pacientes);
})

endpoints.get('/hospital/:n1', async (req, resp) => {
    let id = req.params.n1
    let registro = await Hospital.ProcurarPaciente(id);
    resp.send(registro);
});



endpoints.get('/hospital', async (req, resp) => {
    let registro = await Hospital.ListarHospital();
    resp.send(registro);
});

endpoints.post('/hospital', async (req, resp) => {
let NovoPaciente = req.body
let id = await Hospital.AdicionarPaciente(NovoPaciente)
resp.send({novoid:id})
});


endpoints.put('/hospital/:n1', async (req, resp) => {
    let id = req.params.n1
    let NovoPaciente = req.body
    await Hospital.AlterarPacienete(id,NovoPaciente)
    resp.send()

})


endpoints.delete('/hospital/:n1', async (req, resp) =>{
    let id = req.params.n1
    await Hospital.DeletarPaciente(id)
    resp.send()
})

export default endpoints