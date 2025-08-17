// ============== CARROS ==============
import * as Carros from '../repositorios/carrosrepository.js'

import { Router } from 'express';
const endpoints = Router()

endpoints.get('/carros/filtro', async (req, resp) => {
    let filtro = req.query.cor;
    let registro = await Carros.Filtro(filtro);  
    resp.send(registro);
});

endpoints.get('/carros', async (req, resp) => {
    let registro = await Carros.ListarCarros();
    resp.send(registro);
});

endpoints.get('/carros/:n2', async (req,resp)=>{
    let id = req.params.n2
    let registro= await Carros.ProcurarCarro(id)
    resp.send(registro)
});

endpoints.post('/carros', async (req, resp) => {
    let NovoCarro = req.body;
    let id = await Carros.AdicionarCarros(NovoCarro);
    resp.send({ novoid: id });
});

endpoints.put('/carros/:n1', async (req,resp) =>{
    let id = Number(req.params.n1)
    let novosdados = req.body
    await Carros.AlterarCarro(id,novosdados)
    resp.send()
});

endpoints.delete('/carros/:n1', async (req,resp) => {
    let id = req.params.n1
    await Carros.DeletarCarro(id)
    resp.send()
});


export default endpoints