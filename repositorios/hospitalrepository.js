import {conection} from '../conection.js'

export async function ListarHospital(){
    const comando = `Select *from Pacientes`

    const [registro] = await conection.query(comando)
    return registro


}


export async function AdicionarPaciente(NovoPaciente){
    const comando = `
    insert into Pacientes (nm_nome, nr_idade, id_RG, nm_consulta_marcada, ds_preferencial)
        values(?, ?, ?, ?, ?)
    
    `

    const [info] = await conection.query(comando, [
        NovoPaciente.nm_nome,
        NovoPaciente.nr_idade,
        NovoPaciente.id_rg,
        NovoPaciente.nm_consulta_marcada,
        NovoPaciente.ds_preferencial

    ])

    return info.insertId

}
