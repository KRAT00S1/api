import * as Series from '../repositorios/seriesrepository.js'


import { Router } from "express";
const endpoints = Router();

// Banco de dados: Series
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


export default endpoints