const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'PASSDB',
    database: 'firstapi',
    port: '5432'
})

const getUsers = async (req, res) =>{
    const response = await pool.query('SELECT * FROM users');
    //console.log(response.rows);
    res.json(response.rows);
}

const getUserById = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users where id = $1', [id]);
    res.json(response.rows);
}

const createUser = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    res.json({
        mensaje: 'User Added Succesfully',
        body:{
            user: {name, email}
        }
    });
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    res.send(`User ${id} actualizado con nuevo nombre: ${name} e email: ${email}`);
}

const deleteUser = async (req, res) => {
    const id =  req.params.id;
    const response = await pool.query('DELETE FROM USERS WHERE id = $1', [id]);
    res.json(`User ${id}deleted succesfully`);
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}