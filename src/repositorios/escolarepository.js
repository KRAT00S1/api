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