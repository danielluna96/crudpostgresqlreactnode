const pool = require("./db.js");
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/get', async(req, res) => {
    try{
        const Respuesta = await pool.query("Select * From descriptiontable");
        res.json(Respuesta.rows);
    }catch(err){
        console.error(err);
    }
});

app.post('/add', async(req, res) =>{
    try{
        const { description } = req.body;
        const Peticion = await pool.query(
            `INSERT INTO "descriptionTable" (description) VALUES($1) RETURNING *`,
            [description]
          );
        res.json(Peticion.rows[0]);
    }catch(err){
        console.error(err);
    }
});

app.delete('/delete/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const Borrar = await pool.query(`DELETE FROM "descriptionTable" WHERE "descriptionTable".id = $1`, [id]);
        res.json("Descripción borrada");
    }catch(err){
        console.error(err);
    }
});

app.put('/update/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const { description } = req.body;
        const Actualizar = await pool.query(
            `UPDATE "descriptionTable" SET description = $1 WHERE "descriptionTable".id = $2`, [description, id]
        );
        res.json("Descripción actualizada");
    }catch(err){
        console.error(err);
    }
});

app.listen(3001);
console.log("Running");