import {conection} from './conection.js'


export async function ListarTimes(){
     const comando = `Select *from times_futebol`

    const [registro] =  await conection.query(comando)
    return registro;
}


export async function AdicionarTime(novoTime) {
  const comando = `
    INSERT INTO times_futebol 
      (nome, cidade, estado, pais, ano_fundacao, estadio, capacidade_estadio, tecnico, liga)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const [info] = await conection.query(comando, [
    novoTime.nome,
    novoTime.cidade,
    novoTime.estado,
    novoTime.pais,
    novoTime.ano_fundacao,
    novoTime.estadio,
    novoTime.capacidade_estadio,
    novoTime.tecnico,
    novoTime.liga
  ]);

  return info.insertId;
}


export async function FiltrarTime(nome) {

  const comando = `
  Select *from 
      times_futebol
        WHERE nome like ?
  
  ` 

  const [registro] = await conection.query(comando,[`%${nome}%`])
  return registro
  
}


export async function ProcurarTime(id) {

  const comando = `
  Select *from 
      times_futebol
        WHERE id =?
  
  ` 

  const [registro] = await conection.query(comando,[id])
  return registro
  
}


export async function AlterarTime(id, novoTime) {

  const comando = `
  UPDATE times_futebol
      SET
      nome=?,
      cidade=?,
      estado=?,
      pais=?,
      ano_fundacao=?,
      estadio=?,
      capacidade_estadio=?,
      tecnico=?,
      liga=?

      WHERE id = ?
  `

  const [info]= await conection.query(comando,[
    novoTime.nome,
    novoTime.cidade,
    novoTime.estado,
    novoTime.pais,
    novoTime.ano_fundacao,
    novoTime.estadio,
    novoTime.capacidade_estadio,
    novoTime.tecnico,
    novoTime.liga,
    id
  ])
  
}

export async function DeletarTime(id){
  const comando = `
  DELETE from times_futebol
    WHERE id = ?
  
  `

  const [info] = await conection.query(comando,[id])
}