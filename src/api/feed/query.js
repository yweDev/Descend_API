/// feed query
// store show update delete
// insert select update delete
const { pool } = require('../../data/index');

exports.index = async (id) => {
    const query = `SELECT created_at FROM feed WHERE id=?`
    return await pool(query, [id]);
}

exports.store =  async (user_id, file_id, content) => {
    const query = `INSERT INTO feed (user_id, file_id, content) VALUES (?, ?, ?)`;

    return await pool(query, [user_id, file_id, content]);
}

exports.show =  async (id) => {
    const query = `SELECT * FROM feed WHERE id = ?`

    return await pool(query, [id]);
}

exports.update =  async (file_id, content, id) => {
    const query = `
        UPDATE feed 
        SET file_id = ?,
            content = ?
        WHERE id = ?
        `;
    return await pool(query, [file_id, content, id]);
}

exports.qdelete =  async (id) => {
    const query = `DELETE FROM feed WHERE id = ?`
    return await pool(query, [id]);
}