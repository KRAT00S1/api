// ============== SERIES ==============
import * as Series from '../repository/seriesrepository.js'


import { Router } from "express";
const endpoints = Router();


endpoints.get('/series/filtro', async (req,resp) =>{
    let filtro = req.query.titulo
    let FiltrarSerie = await Series.FiltrarSerie(filtro)
    resp.send(FiltrarSerie)
})


endpoints.get('/series/:n1', async (req,resp)=>{
    let id = Number(req.params.n1)
    let ProcurarSerie = await Series.ProcurarSerie(id)
    resp.send(ProcurarSerie)

})
endpoints.get('/series', async (req, resp) => {
    let registro = await Series.ListarSeries();
    resp.send(registro);
});

endpoints.post('/series', async (req, resp) => {
    let novaserie = req.body;
    let id = await Series.AdicionarSerie(novaserie);
    resp.send({ novoid: id });
});

endpoints.put('/series/:n1', async (req,resp)=>{
    let id = req.params.n1
    let NovaSerie = req.body
    await Series.AlterarSerie(id,NovaSerie)
    resp.send()
})

endpoints.delete('/series/:n1', async (req,resp) =>{
    let id = req.params.n1
    await Series.DeletarSerie(id)
    resp.send()
})




export default endpoints