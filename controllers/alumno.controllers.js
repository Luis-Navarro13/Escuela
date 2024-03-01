const pool = require("../helpers/mysql-config")

const getAlumno = (req,res)=>{
    const sql = "SELECT * FROM alumno";
    pool.query(sql,(err,results,fields)  =>  {
        if(err)
            res.json(err)
        res.json(results)
    })
    //SE LE PONE UNA IMAGEN
    //res.send <- Enviar texto plano
    //res.json <- Enviar texto en formato json
    //res.status()
}
const saveAlumno = (req,res) => {
    const {nombre, paterno, materno, nacimiento} = req.body;
    //validar que body si contiene los atributos que se requiere (nombre,paterno)
    const sql = `INSERT INTO alumno(nombre, paterno, materno, nacimiento)
                 VALUES (?,?,?,?)`;
    pool.query(sql,[nombre,paterno,materno,nacimiento],(err,results,fields)  =>  {
        if(err)
            res.json(err)
        res.json(results)
        if (results.affectedRows > 0)
            res.json({"message":"Se realizo el insert"})
        res.json({"message":"algo paso"})
    })
}
const updateAlumno = (req,res) => {
    const {nombre, paterno, materno, nacimiento,id} = req.body
    //validar que body si contiene los atributos que se requiere (nombre,paterno)
    const sql = `UPDATE alumno SET  nombre = ?, paterno = ?, materno = ?, nacimiento = ? WHERE id = ?`;
    pool.query(sql,[nombre,paterno,materno,nacimiento,id],(err,results,fields)  =>  {
        if(err)
            res.json(err)
            if (results.affectedRows > 0)
            res.json({"message":"Se realizo el update"})
        res.json({"message":"algo paso"})
    })
}

module.exports = {getAlumno,updateAlumno,saveAlumno}