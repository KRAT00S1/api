import {conection} from '../conection.js'

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

