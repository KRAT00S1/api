import nodemon from 'nodemon'
import {conection} from './conection.js'

export async function ListarHospital(){
    const comando = `Select *from Pacientes`

    const [registro] = await conection.query(comando)
    return registro


}


export async function AdicionarPaciente(NovoPaciente) {
    const comando = `
    INSERT INTO Pacientes (nm_nome , nr_idade, id_RG , nm_consulta_marcada , ds_preferencial)
    VALUES (?, ?, ?, ?, ?)
    
    `

    const [info] = await conection.query(comando,[
        NovoPaciente.nm_nome,
        NovoPaciente.nr_idade,
        NovoPaciente.id_RG,
        NovoPaciente.nm_consulta_marcada,
        NovoPaciente.ds_preferencial
    ]) 
    return info.insertId
}


export async function AlterarPacienete(id,NovoPaciente){
    const comando = `
    UPDATE Pacientes 
        SET
            nm_nome=?,
            nr_idade=?,
            id_RG =?,
            nm_consulta_marcada =?,
            ds_preferencial=?

            WHERE id_paciente= ?
    `

    const [info] = await conection.query(comando,[
        NovoPaciente.nm_nome,
        NovoPaciente.nr_idade,
        NovoPaciente.id_RG,
        NovoPaciente.nm_consulta_marcada,
        NovoPaciente.ds_preferencial,
        id
    ])
}

export async function ProcurarPaciente(id) {

    const comando = `
    Select *from Pacientes 
        WHERE id_paciente = ? 
    
    `

    const [registro] = await conection.query(comando,[id])
    return registro
    
}

export async function FiltrarPaciente(nm_nome) {
    const comando = `
        SELECT *
          FROM Pacientes
         WHERE nm_nome LIKE ?;
    `;

    const [registro] = await conection.query(comando, [`%${nm_nome}%`]);
    return registro;
}



export async function DeletarPaciente(id) {
    const comando = `
    DELETE from Pacientes
        WHERE id_paciente = ?
    
    `

    const [info] = await conection.query(comando,[id])
    
}
