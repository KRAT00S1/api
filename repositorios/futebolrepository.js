import {conection} from '../conection.js'


export async function ListarJogadores(){
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
