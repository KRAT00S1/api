import { conection } from "./conection.js";

export async function ListarFuncionarios() {
  const comando = `
  Select *from funcionarios1
  `

  const [registro] = await conection.query(comando)
  return registro  
}

export async function FiltrarFuncionarios(nome) {
  const comando = `
  Select *from funcionarios1
    WHERE nm_nome like ?
  `

  const [registro] = await conection.query(comando,[`%${nome}%`])
  return registro  
}

export async function ProcurarFuncionarios(id) {
  const comando = `
  Select *from funcionarios1
    WHERE id_funcionarios = ?
  `

  const [registro] = await conection.query(comando,[id])
  return registro  
}


export async function AdicionarFuncionario(novoFuncionario) {
const comando = `
INSERT INTO funcionarios1 (nm_nome, ds_cargo, vl_salario, dt_data_contratacao, bt_empregado)
 VALUES(?,?,?,?,?)

`

const [info] = await conection.query(comando,[
  novoFuncionario.nm_nome,              
    novoFuncionario.ds_cargo,
    novoFuncionario.vl_salario,
    novoFuncionario.dt_data_contratacao,  
    novoFuncionario.bt_empregado
])

return info.insertId
  
}


export async function AlterarFuncionario(id,novoFuncionario) {
const comando = `
 UPDATE funcionarios1 
  SET
    nm_nome = ?,
    ds_cargo = ?,
    vl_salario = ?,
    dt_data_contratacao= ?,
    bt_empregado= ?
 
  WHERE id_funcionarios = ?

`

const [info] = await conection.query(comando,[
  novoFuncionario.nm_nome,              
    novoFuncionario.ds_cargo,
    novoFuncionario.vl_salario,
    novoFuncionario.dt_data_contratacao,  
    novoFuncionario.bt_empregado,
    id
])


  
}


export async function Deletarfuncionarios(id) {
  const comando = `
  Delete from funcionarios1
    WHERE id_funcionarios = ?
  `

  const [registro] = await conection.query(comando,[id])
  return registro  
}


