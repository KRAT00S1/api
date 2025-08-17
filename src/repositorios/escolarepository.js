import {conection} from './conection.js'


export async function listarmaterias(){
    const comando = `Select *from Materias`

    const [registro] =  await conection.query(comando)
    return registro;

}


export async function AdicionarMateria(NovaMateria){
    const comando = `
    insert into Materias (nm_materia, nm_professor, ds_duracao, nr_bimestre, bt_professor)
        values(?, ?, ?, ?, ?)
`

    const [info] = await conection.query(comando,[
        NovaMateria.nm_materia,
        NovaMateria.nm_professor,
        NovaMateria.ds_duracao,
        NovaMateria.nr_bimestre,
        NovaMateria.bt_professor
    ])

    return info.insertId;

    



}

export async function AlterarMateria(id,NovaMateria){
    const comando = `
    UPDATE Materias 
        SET    
        nm_materia=?,
        nm_professor=?,
        ds_duracao=?,
        nr_bimestre=?,
        bt_professor=?

        WHERE id_materia = ?

       
`

    const [info] = await conection.query(comando,[
        NovaMateria.nm_materia,
        NovaMateria.nm_professor,
        NovaMateria.ds_duracao,
        NovaMateria.nr_bimestre,
        NovaMateria.bt_professor,
        id
    ])
}


export async function Filtrarmaterias(nome){
    const comando = `
    Select *from Materias
        WHERE nm_materia like ?
    
    `

    const [registro] =  await conection.query(comando, [`%${nome}%`])
    return registro;

}

export async function Procurarmaterias(id){
    const comando = `
    Select *from Materias
        WHERE id_materia = ?
    
    `

    const [registro] =  await conection.query(comando, [id])
    return registro;

}


export async function DeletarMateria(id) {
    const comando = `
    DELETE from Materias
        WHERE id_materia = ?
    
    `
    const [info] = await conection.query(comando,[id])
    
}



