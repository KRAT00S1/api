// ============== JOGOS ==============
import * as Jogos from '../repositorios/jogosrepository.js'

import { Router } from "express";
const endpoints = Router()

endpoints.get('/steam/filtro', async (req, resp) =>{
    let filtro = req.query.nm_jogo
    let FiltrarJogo = await Jogos.FiltrarJogo(filtro)
    resp.send(FiltrarJogo)
})

endpoints.get('/steam/:n1', async (req,resp) =>{
    let id = Number(req.params.n1)
    let novojogo = await Jogos.ProcuraJogo(id)
    resp.send(novojogo)
})



endpoints.get('/steam', async (req, resp) => {
    let registro = await Jogos.ListarJogos();
    resp.send(registro);
});

endpoints.post('/steam', async (req, resp) => {
    let NovoJogo = req.body;
    let id = await Jogos.AdicionarJogos(NovoJogo);
    resp.send({ novoid: id });
});


endpoints.put('/steam/:n1', async (req,resp) =>{
    let id =Number(req.params.n1)
    let novojogo = req.body
    await Jogos.AlterarJogo(id,novojogo)
    resp.send()
})


endpoints.delete('/steam/:n1', async (req,resp) =>{
    let id = Number(req.params.n1)
    await Jogos.DeletarJogo(id)
    resp.send()
})


export default endpoints