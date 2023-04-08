/// feed query
// store show update delete
// insert select update delete
const { pool } = require('../../data/index');

exports.index = async (id) => {
    const query = `SELECT created_at FROM feed WHERE id=?`
    return await pool(query, [id]);
}

exports.store =  async (user_id, sub_id, title, content) => {
    // const query = `INSERT INTO feed (user_id, title, content) VALUES (?, ?, ?)`;
    // return await pool(query, [user_id, title, content]);
    const query = `INSERT INTO feed (user_id, sub_id, title, content) VALUES (?, ?, ?, ?)`;
    return await pool(query, [user_id, sub_id, title, content]);
}

exports.show =  async (sub_id) => {
    const query = `SELECT * FROM feed WHERE sub_id = ?`

    return await pool(query, [sub_id]);
}

exports.update =  async (title, content, id) => {
    const query = `
        UPDATE feed 
        SET title = ?,
            content = ?
        WHERE id = ?
        `;
    return await pool(query, [title, content, id]);
}

exports.qdelete =  async (id) => {
    const query = `DELETE FROM feed WHERE id = ?`
    return await pool(query, [id]);
}