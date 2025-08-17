import {conection} from './conection.js'


export async function ListarTenis() {
  const comando = `
    SELECT * FROM tenis
  `;

  const [registro] = await conection.query(comando);
  return registro;
}

export async function AdicionarTenis(novoTenis) {
  const comando = `
    INSERT INTO tenis 
      (nome, marca, cor, tamanho, preco, categoria, estoque)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const [info] = await conection.query(comando, [
    novoTenis.nome,
    novoTenis.marca,
    novoTenis.cor,
    novoTenis.tamanho,
    novoTenis.preco,
    novoTenis.categoria,
    novoTenis.estoque
  ]);

  return info.insertId;
}


export async function AlterarTenis(id,novoTenis){
  const comando = `
  UPDATE tenis
  SET

  nome=?, 
  marca=?, 
  cor=?, 
  tamanho=?, 
  preco=?, 
  categoria=?, 
  estoque=?

  WHERE id = ?



  `

  const [info] = await conection.query(comando,[
    novoTenis.nome,
    novoTenis.marca,
    novoTenis.cor,
    novoTenis.tamanho,
    novoTenis.preco,
    novoTenis.categoria,
    novoTenis.estoque,
    id
  ])
}


export async function ProcurarTenis(id){
  const comando = `
  Select *from tenis
     where id = ?
  
  `
  const [registro] = await conection.query(comando,[id])
  return registro
}


export async function  FiltrarTenis(nome) {
  const comando = `
  Select *from tenis 
    WHERE nome like ?
  `

  const[registro] = await conection.query(comando, [`%${nome}%`])
  return registro
  
} 


export async function DeletarTenis(id) {

  const comando = `
  DELETE from tenis
    where id = ?
  
  `

  const [info] = await conection.query(comando,[id])
  
}