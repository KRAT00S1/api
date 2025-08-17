// ============== LOJA ==============
import * as Tenis from '../repositorios/tenisrepository.js'

import { Router } from "express";
const endpoints = Router();


endpoints.get('/tenis/filtro', async (req, resp) => {
    let filtro = req.query.nome
    let FiltrarTenis = await Tenis.FiltrarTenis(filtro)
    resp.send(FiltrarTenis)
})

endpoints.get('/tenis/:n1', async (req, resp) =>{
    let id = Number(req.params.n1)    
    let registro = await Tenis.ProcurarTenis(id)
    resp.send(registro)
})

endpoints.get('/tenis', async (req, resp) => {
    let registro = await Tenis.ListarTenis();
    resp.send(registro);
});

endpoints.post('/tenis', async (req, resp) => {
    let NovoTenis = req.body;
    let id = await Tenis.AdicionarTenis(NovoTenis);
    resp.send({ novoid: id });
});

endpoints.put('/tenis/:n1', async (req, resp) =>{
    let id = Number(req.params.n1)
    let novoTenis = req.body 
    await Tenis.AlterarTenis(id,novoTenis)
    resp.send()

})

endpoints.delete('/tenis/:n1', async (req,resp)=>{
    let id = Number(req.params.n1)
    await Tenis.DeletarTenis(id)
    resp.send()
})


export default endpoints