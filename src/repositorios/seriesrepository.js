import {conection} from './conection.js'

// Banco de dados: Series

export async function ListarSeries(){
    const comando = `Select *from series`

    const [registro] =  await conection.query(comando)
    return registro;

}


export async function AdicionarSerie(NovaSerie) {
    const comando = `
    INSERT INTO series (titulo, ano_lancamento, genero, temporadas, criador, avaliacao) 
    VALUES (?,?,?,?,?,?)

    `

    const [info] = await conection.query(comando,[
        NovaSerie.titulo,
        NovaSerie.ano_lancamento,
        NovaSerie.genero,
        NovaSerie.temporadas,
        NovaSerie.criador,
        NovaSerie.avaliacao

    ]
)

return info.insertId;

}



export async function AlterarSerie(id,NovaSerie){

    const comando = `
    UPDATE series
    SET
    titulo=?,
    ano_lancamento=?, 
    genero=?, 
    temporadas=?, 
    criador=?, 
    avaliacao=?

    WHERE id = ?

    `

    const [info] = await conection.query(comando,[
         NovaSerie.titulo,
        NovaSerie.ano_lancamento,
        NovaSerie.genero,
        NovaSerie.temporadas,
        NovaSerie.criador,
        NovaSerie.avaliacao,
        id
    ])

}


export async function ProcurarSerie(id){
    const comando = `
    Select *from series
    WHERE id = ? 
    
    `

    const [registro] = await conection.query(comando,[id])
    return registro
} 


export async function FiltrarSerie(titulo){
    const comando = `
    Select * from series
    where titulo like ?
    
    `

    const [registro] = await conection.query(comando, [`%${titulo}%`])
    return registro
}



export async function DeletarSerie(id){
    const comando = `
    DELETE from series
        where id = ?
    
    `

    const[info] = await conection.query(comando,[id])
}