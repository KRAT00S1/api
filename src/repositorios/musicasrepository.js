import {conection} from './conection.js'

export async function ListarMusicas(){
    const comando = `Select *from musicas`

    const [registro] =  await conection.query(comando)
    return registro;

}

export async function AdicionarMusica(NovaMusica) {
  const comando = `
    INSERT INTO musicas 
      (nm_musica, ds_artista, url_musica, dt_lancamento, qtd_visualizacoes, hr_duracao, bt_destaque, ds_idioma)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const [info] = await conection.query(comando, [
    NovaMusica.nm_musica,
    NovaMusica.ds_artista,
    NovaMusica.url_musica,
    NovaMusica.dt_lancamento,
    NovaMusica.qtd_visualizacoes,
    NovaMusica.hr_duracao,
    NovaMusica.bt_destaque,
    NovaMusica.ds_idioma
  ]);

  return info.insertId;
}

export async function ProcurarMusica(id) {
  const comando = `
    SELECT *
    FROM musicas
    WHERE id_musica = ?
  `;

  const [registro] = await conection.query(comando, [id]);
  return registro;
}


export async function FiltrarMusica(nome){
  const comando = `
  Select *from musicas
    WHERE nm_musica like ?
  
  `

  const [registro] = await conection.query(comando, [`%${nome}%`])
  return registro
}


export async function AlterarMusica(id_musica,NovaMusica){
  const comando = `
  UPDATE musicas
  SET

  nm_musica=?, 
  ds_artista=?, 
  url_musica=?, 
  dt_lancamento=?, 
  qtd_visualizacoes=?, 
  hr_duracao=?, 
  bt_destaque=?, 
  ds_idioma=?
  
  WHERE id_musica = ?
  
  `

  const [info] = await conection.query(comando,[
    NovaMusica.nm_musica,
    NovaMusica.ds_artista,
    NovaMusica.url_musica,
    NovaMusica.dt_lancamento,
    NovaMusica.qtd_visualizacoes,
    NovaMusica.hr_duracao,
    NovaMusica.bt_destaque,
    NovaMusica.ds_idioma,
    id_musica
  ])
}


export async function DeletarMusica(id) {
  const comando = `
  DELETE from musicas
    WHERE id_musica = ?
  
  
  `

  const [info] = await conection.query(comando,[id])
  
}

