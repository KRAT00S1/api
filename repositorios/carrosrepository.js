import {conection} from './conection.js'


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


export async function AlterarCarro(id, NovoCarro) {
  const comando = `
    UPDATE Carros2
    SET
      Valor = ?, 
      Placa = ?,
      modelo = ?, 
      ano_fabricacao = ?,
      cor = ?, 
      ar_condicionado = ?
    WHERE id = ?
  `;

  const [info] = await conection.query(comando, [
    NovoCarro.valor,
    NovoCarro.placa,
    NovoCarro.modelo,
    NovoCarro.ano_fabricacao,
    NovoCarro.cor,
    NovoCarro.ar_condicionado,
    id
  ]);
}


export async function ProcurarCarro(id){
    const comando = `
    Select *from Carros2

    where id= ? 
    
    `


    const [info] = await conection.query(comando,[id])
    return info

}


export async function Filtro(cor) {
  const comando = `
   select *from Carros2
where cor like ?

  `;

  const [registro] = await conection.query(comando, [`%${cor}%`]);
  return registro;
}


export async function DeletarCarro(id){
    const comando = `
    DELETE from Carros2
    where id = ?
    
    `

    const [info] = await conection.query(comando,[id])

}
