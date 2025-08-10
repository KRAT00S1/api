import { AdicionarSerie,ListarSeries} from './repositorios/seriesrepository.js'
import { ListarFilmes,Adicionarfilmes} from './repositorios/filmesrepository.js'
import { ListarMusicas,AdicionarMusica} from './repositorios/musicasrepository.js'
import { listarmaterias,AdicionarMateria } from './repositorios/escolarepository.js'
import { ListarHospital,AdicionarPaciente } from './repositorios/hospitalrepository.js'
import { ListarJogos,AdicionarJogos } from './repositorios/jogosrepository.js'
import { ListarCarros,AdicionarCarros } from './repositorios/carrosrepository.js'
import { ListarFuncionarios,AdicionarFuncionarios } from './repositorios/empresasrespository.js'
import { AdicionarTime, ListarJogadores } from './repositorios/futebolrepository.js'
import { ListarTenis,AdicionarTenis } from './repositorios/tenisrepository.js'








import express from 'express'

const api = express();
api.use(express.json()); // permite o uso de BODY


// Banco de dados: Series

api.get('/series', async (req,resp) => {
    
    let registro = await ListarSeries();
    resp.send(registro)

})

api.post('/series', async (req,resp) => {
    let novaserie = req.body;

    let id = await AdicionarSerie(novaserie)
    resp.send({novoid:id})

})

// Banco de dados: Filmes

api.get('/filmes', async (req,resp) => {
    
    let registro = await ListarFilmes();
    resp.send(registro)

})

api.post('/filmes', async (req, resp) =>{
    let NovoFilme = req.body

    let id = await Adicionarfilmes(NovoFilme)
    resp.send({novoid:id})

})


// Banco de dados: Musicas

api.get('/musicas', async (req,resp) => {
    
    let registro = await ListarMusicas();
    resp.send(registro)

})

api.post('/musicas', async (req, resp)=> {

       let NovaMusica = req.body

    let id = await AdicionarMusica(NovaMusica)
    resp.send({novoid:id})

})


// Banco de dados: Escola

api.get('/escola', async (req,resp) => {
    
    let registro = await listarmaterias();
    resp.send(registro)

})


api.post('/escola', async (req,resp) => {
    let NovaMateria = req.body


    let id = await AdicionarMateria(NovaMateria)
    resp.send({novoid:id})




})


// Banco de dados: Hospital

api.get('/hospital', async (req,resp) => {
    
    let registro = await ListarHospital();
    resp.send(registro)

})

api.post('/hospital', async (req,resp) => {

    let NovoPaciente = req.body

    let id = await AdicionarPaciente(NovoPaciente)
    resp.send({novoid:id})

})


// Banco de dados: Steam

api.get('/steam', async (req,resp) => {

    let registro = await ListarJogos()
    resp.send(registro)

})


api.post('/steam', async (req, resp) =>{
    let NovoJogo = req.body

    let id = await AdicionarJogos(NovoJogo)
    resp.send({novoid:id})



})


// Banco de dados: Concessionaria

api.get('/carros', async (req,resp) => {

    let registro = await ListarCarros()
    resp.send(registro)

})


api.post('/carros', async (req, resp) =>{
    let NovoCarro = req.body

    let id = await AdicionarCarros(NovoCarro)
    resp.send({novoid:id})



})


// Banco de dados: Empresa

api.get('/empresa', async (req,resp) => {

    let registro = await ListarFuncionarios()
    resp.send(registro)

})


api.post('/empresas', async (req, resp) => {
    
        let novoFuncionario = req.body;

        // Chamada para adicionar no banco
        let id = await AdicionarFuncionarios(novoFuncionario);

        // Envia o ID gerado
        resp.send({ novoid: id })
        
    })


    // Banco de dados: Times

api.get('/time', async (req,resp) => {

    let registro = await ListarJogadores()
    resp.send(registro)

})


api.post('/time', async (req, resp) => {
    
        let NovoTime = req.body;

        
        let id = await AdicionarTime(NovoTime);

        
        resp.send({ novoid: id })
        
    })



        // Banco de dados: Tenis

api.get('/tenis', async (req,resp) => {

    let registro = await ListarTenis()
    resp.send(registro)

})


api.post('/tenis', async (req, resp) => {
    
        let NovoTenis = req.body;

        
        let id = await AdicionarTenis(NovoTenis);

        
        resp.send({ novoid: id })
        
    })

api.listen(5010, () => console.log('....Api subiu com sucesso'))