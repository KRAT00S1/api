import * as Musicas from '../repositorios/musicasrepository.js'

import { Router } from "express";
const endpoints = Router()



endpoints.get('/musicas/filtro', async (req, resp) =>{
    let filtro= req.query.nm_musica
    let FiltrarMusica = await Musicas.FiltrarMusica(filtro)
    resp.send(FiltrarMusica)
})


endpoints.get('/musicas/:n1', async (req, resp)=> {
    let id = Number(req.params.n1)
    let registro = await Musicas.ProcurarMusica(id)
    resp.send(registro)
})

endpoints.get('/musicas', async (req, resp) => {
    let registro = await Musicas.ListarMusicas();
    resp.send(registro);
});

endpoints.post('/musicas', async (req, resp) => {
    let NovaMusica = req.body;
    let id = await Musicas.AdicionarMusica(NovaMusica);
    resp.send({ novoid: id });
});

endpoints.put('/musicas/:n1', async (req,resp)=>{
    let id = Number(req.params.n1)
    let NovaMusica = req.body
    await Musicas.AlterarMusica(id,NovaMusica)
    resp.send()
})


endpoints.delete('/musicas/:n1', async (req,resp)=>{
    let id = Number(req.params.n1)
    await Musicas.DeletarMusica(id)
    resp.send()
})



export default endpoints
