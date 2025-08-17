import { AdicionarRotas } from './rotas.js'
import express from 'express'




const api = express();
api.use(express.json());

AdicionarRotas(api)





api.listen(5010, () => console.log('....Api subiu com sucesso'));