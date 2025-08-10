import {conection} from '../conection.js'


export async function ListarJogos(){
    const comando = `Select *from Games`


    const [registro]= await conection.query(comando)
    return registro
}

export async function AdicionarJogos(NovoJogo){
    const comando = `
    insert into Games (nm_jogo, ds_categoria, nr_classificacao, bt_disponivel, vl_valor)
        values (?, ?, ?, ?, ?)
    
    
    `
    const [info] = await conection.query(comando,[
        NovoJogo.nm_jogo,
        NovoJogo.ds_categoria,
        NovoJogo.nr_classificacao,
        NovoJogo.bt_disponivel,
        NovoJogo.vl_valor

    ])


}