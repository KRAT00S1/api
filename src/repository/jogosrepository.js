import {conection} from './conection.js'


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

export async function AlterarJogo(id_games,NovoJogo){
    const comando = `
    UPDATE Games
        SET
           nm_jogo= ?, 
           ds_categoria= ?, 
           nr_classificacao= ?, 
           bt_disponivel= ?, 
           vl_valor=?
           
           WHERE id_games = ?;
    
    `

    const [info] = await conection.query(comando,[
        NovoJogo.nm_jogo,
        NovoJogo.ds_categoria,
        NovoJogo.nr_classificacao,
        NovoJogo.bt_disponivel,
        NovoJogo.vl_valor,
        id_games
    ])
}


export async function ProcuraJogo(id){
    const comando = `
    SELECT *from Games
        WHERE id_games = ?
    
    `

    const [registro]= await conection.query(comando,[id])
    return registro
}


export async function FiltrarJogo(nome) {
    const comando = `
        SELECT * FROM Games
        WHERE nm_jogo LIKE ?
    `;

    // precisa de await
    const [registro] = await conection.query(comando, [`%${nome}%`]);
    return registro;
}


export async function DeletarJogo(id){

    const comando = `
        DELETE from games
            WHERE id_games = ?
    
    `

    const [info] = await conection.query(comando,[id])

}