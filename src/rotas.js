import seriesControler from './controller/seriescontroller.js';
import filmesControler from './controller/filmescontroller.js';
import musicasControler from './controller/musicascontroller.js';
import escolaControler from './controller/escolacontroller.js';
import hospitalControler from './controller/hospitalcontroller.js';
import jogosControler from './controller/jogoscontroller.js';
import carrosControler from './controller/carroscontroller.js';
import empresaControler from './controller/empresascontroller.js';
import futebolControler from './controller/futebolcontroller.js';
import tenisControler from './controller/teniscntroller.js'




export function AdicionarRotas(api) {
api.use(seriesControler);
api.use(filmesControler);
api.use(musicasControler);
api.use(escolaControler);
api.use(hospitalControler);
api.use(jogosControler);
api.use(carrosControler);
api.use(empresaControler);
api.use(futebolControler);
api.use(tenisControler);
}