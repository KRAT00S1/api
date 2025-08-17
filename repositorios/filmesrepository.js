import {conection} from './conection.js'


export async function ListarFilmes(){
    const comando = `Select *from filmes`

    const [registro] =  await conection.query(comando)
    return registro;

}


export async function Adicionarfilmes(NovoFilme) {
    const comando = `
    INSERT INTO filmes (titulo, ano_lancamento, genero, duracao_minutos, diretor, avaliacao) 
    VALUES (?, ?, ?, ?, ?, ?)
    `;

    const [info] = await conection.query(comando, [
        NovoFilme.titulo,
        NovoFilme.ano_lancamento,
        NovoFilme.genero,
        NovoFilme.duracao_minutos,
        NovoFilme.diretor,
        NovoFilme.avaliacao
    ]);

    return info.insertId;
}

