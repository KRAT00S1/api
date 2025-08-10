import {conection} from '../conection.js'


export async function ListarCarros(){
    const comando = `Select *from Carros2`


    const [registro] = await conection.query(comando)
    return registro 
}

export async function AdicionarCarros(NovoCarro){
    const comando = `
    INSERT INTO Carros1 (id, Valor, Placa, modelo, ano_fabricacao, cor, ar_condicionado) 
        VALUES(?, ?, ?, ?, ?, ?, ?)
`

const [info] = await conection.query(comando,[
    NovoCarro.id,
    NovoCarro.valor,
    NovoCarro.Placa,
    NovoCarro.modelo,
    NovoCarro.ano_fabricacao,
    NovoCarro.cor,
    NovoCarro.ar_condicionado
])

return info.insertId
}
