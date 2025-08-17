import * as Series from './repositorios/seriesrepository.js'
import * as Filmes from './repositorios/filmesrepository.js'
import * as Musicas from './repositorios/musicasrepository.js'
import * as Escola from './repositorios/escolarepository.js'
import * as Hospital from './repositorios/hospitalrepository.js'
import * as Jogos from './repositorios/jogosrepository.js'
import * as Carros from './repositorios/carrosrepository.js'
import * as Empresa from './repositorios/empresasrespository.js'
import * as Futebol from './repositorios/futebolrepository.js'
import * as Tenis from './repositorios/tenisrepository.js'

import express from 'express'

const api = express();
api.use(express.json());




// Banco de dados: Series
api.get('/series', async (req, resp) => {
    let registro = await Series.ListarSeries();
    resp.send(registro);
});

api.post('/series', async (req, resp) => {
    let novaserie = req.body;
    let id = await Series.AdicionarSerie(novaserie);
    resp.send({ novoid: id });
});

api.put('/series/:n1', async (req,resp)=>{
    let id = req.params.n1
    let NovaSerie = req.body
    await Series.AlterarSerie(id,NovaSerie)
    resp.send()
})




// Banco de dados: Filmes
api.get('/filmes', async (req, resp) => {
    let registro = await Filmes.ListarFilmes();
    resp.send(registro);
});

api.post('/filmes', async (req, resp) => {
    let NovoFilme = req.body;
    let id = await Filmes.Adicionarfilmes(NovoFilme);
    resp.send({ novoid: id });
});





// Banco de dados: Musicas
api.get('/musicas', async (req, resp) => {
    let registro = await Musicas.ListarMusicas();
    resp.send(registro);
});

api.post('/musicas', async (req, resp) => {
    let NovaMusica = req.body;
    let id = await Musicas.AdicionarMusica(NovaMusica);
    resp.send({ novoid: id });
});




// Banco de dados: Escola
api.get('/escola', async (req, resp) => {
    let registro = await Escola.listarmaterias();
    resp.send(registro);
});

api.post('/escola', async (req, resp) => {
    let NovaMateria = req.body;
    let id = await Escola.AdicionarMateria(NovaMateria);
    resp.send({ novoid: id });
});

// Banco de dados: Hospital
api.get('/hospital', async (req, resp) => {
    let registro = await Hospital.ListarHospital();
    resp.send(registro);
});

api.post('/hospital', async (req, resp) => {
    let NovoPaciente = req.body;
    let id = await Hospital.AdicionarPaciente(NovoPaciente);
    resp.send({ novoid: id });
});

// Banco de dados: Steam
api.get('/steam', async (req, resp) => {
    let registro = await Jogos.ListarJogos();
    resp.send(registro);
});

api.post('/steam', async (req, resp) => {
    let NovoJogo = req.body;
    let id = await Jogos.AdicionarJogos(NovoJogo);
    resp.send({ novoid: id });
});



// Banco de dados: Concessionaria
// 

api.get('/carros/filtro', async (req, resp) => {
    let filtro = req.query.cor;
    let registro = await Carros.Filtro(filtro);  
    resp.send(registro);
});

api.get('/carros', async (req, resp) => {
    let registro = await Carros.ListarCarros();
    resp.send(registro);
});

api.get('/carros/:n2', async (req,resp)=>{
    let id = req.params.n2
    let registro= await Carros.ProcurarCarro(id)
    resp.send(registro)
})


api.post('/carros', async (req, resp) => {
    let NovoCarro = req.body;
    let id = await Carros.AdicionarCarros(NovoCarro);
    resp.send({ novoid: id });
});

api.put('/carros/:n1', async (req,resp) =>{
    let id = Number(req.params.n1)
    let novosdados = req.body

    await Carros.AlterarCarro(id,novosdados)
    resp.send()
})

api.delete('/carros/:n1', async (req,resp) => {
    let id = req.params.n1
    await Carros.DeletarCarro(id)
    resp.send()
})





// Banco de dados: Empresa
api.get('/empresa', async (req, resp) => {
    let registro = await Empresa.ListarFuncionarios();
    resp.send(registro);
});

api.post('/empresas', async (req, resp) => {
    let novoFuncionario = req.body;
    let id = await Empresa.AdicionarFuncionarios(novoFuncionario);
    resp.send({ novoid: id });
});

// Banco de dados: Times
api.get('/time', async (req, resp) => {
    let registro = await Futebol.ListarJogadores();
    resp.send(registro);
});

api.post('/time', async (req, resp) => {
    let NovoTime = req.body;
    let id = await Futebol.AdicionarTime(NovoTime);
    resp.send({ novoid: id });
});

// Banco de dados: Tenis
api.get('/tenis', async (req, resp) => {
    let registro = await Tenis.ListarTenis();
    resp.send(registro);
});

api.post('/tenis', async (req, resp) => {
    let NovoTenis = req.body;
    let id = await Tenis.AdicionarTenis(NovoTenis);
    resp.send({ novoid: id });
});

api.listen(5010, () => console.log('....Api subiu com sucesso'));