import {conection} from '../conection.js'


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
