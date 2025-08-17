import {conection} from './conection.js'


export async function ListarFuncionarios(){
    const comando = `Select *from funcionarios1`


    const [registro]= await conection.query(comando)
    return registro
}

export async function AdicionarFuncionarios(novoFuncionario) {
  const comando = `
    INSERT INTO funcionarios1 
      (nm_nome, ds_cargo, vl_salario, dt_data_contratacao, bt_empregado)
    VALUES (?, ?, ?, ?, ?)
  `;

  const [info] = await funcao.conectionempresa.query(comando, [
    novoFuncionario.nm_nome,              // nome minúsculo: nm_nome
    novoFuncionario.ds_cargo,
    novoFuncionario.vl_salario,
    novoFuncionario.dt_data_contratacao,  // nome minúsculo e correto
    novoFuncionario.bt_empregado
  ]);

  return info.insertId;
}



